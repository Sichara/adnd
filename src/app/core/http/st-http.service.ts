import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpOptions, HttpRequest, ErrorMessage } from './st-http.models';
import { StHttpUtilService } from './st-http.util.service';
import { DEFAULT_HEADERS } from './st-http.config';
import { CacheService } from '../cache/index';
import * as _ from 'lodash';

@Injectable()
export class StHttpService {
    private searchParams: URLSearchParams;
    private _headers: Headers = new Headers(DEFAULT_HEADERS);

    private get headers(): Headers {
        return this._headers;
    }

    constructor(private http: Http,
                private cacheService: CacheService,
                private util: StHttpUtilService) {
        this.searchParams = new URLSearchParams();
    }

    get<T>(url: string, options?: RequestOptionsArgs, httpOptions?: HttpOptions): Observable<T> {
        const requestParams: HttpRequest = {
            url: this.util.generateAPIUrl(url),
            options: this.getRequestOptions(options)
        };

        httpOptions = Object.assign({cache: false, reload: false}, httpOptions);

        const httpGet: Observable<T> = this.http
            .get(requestParams.url, requestParams.options)
            .map<Response, T>(this.util.convertResponse)
            .do(
                () => {},
                (error: ErrorMessage) => {
                    if (!this.hideNotifications(httpOptions.hideNotifications, error.status)) {
                        this.util.onError(error._body);
                    }

                    this.util.hideLoading();
                }
            )
            .catch(() => Observable.empty())
            .share();

        if (httpOptions.cache) {
            return this.cacheService.cacheHttp<T>(this.util.requestToString(requestParams), httpGet, httpOptions.reload);
        } else {
            this.util.onLoading<T>(httpGet);

            return httpGet;
        }
    }

    post<T>(url: string, body: Object, showBlockScreen: boolean = true, options?: RequestOptionsArgs): Observable<T> {
        this.util.onRequestStart(showBlockScreen);

        return this.http
            .post(this.util.generateAPIUrl(url), body, this.getRequestOptions(options))
            .let(this.util.responseProcessor);
    }

    put<T>(url: string, body: Object, options?: RequestOptionsArgs): Observable<T> {
        this.util.onRequestStart();

        return this.http
            .put(this.util.generateAPIUrl(url), body, this.getRequestOptions(options))
            .let(this.util.responseProcessor);
    }

    delete<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
        this.util.onRequestStart();

        return this.http
            .delete(this.util.generateAPIUrl(url), this.getRequestOptions(options))
            .let(this.util.responseProcessor);
    }

    private hideNotifications(hideNotifications: boolean | number[], errorStatus: number): boolean {
        return _.isArray(hideNotifications)
            ? hideNotifications.indexOf(errorStatus) !== -1
            : hideNotifications;
    }

    private getRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options && options.headers) {
            // TODO refacor merge headers
            this._headers.forEach((values: string[], name: string) => {
                if (!options.headers.has(name)) {
                    options.headers.set(name, values);
                }

                // TODO angular2 bug
                if (options.headers.get(name) === 'multipart/form-data') {
                    options.headers.delete(name);
                }
            });
        }

        return Object.assign({}, {
            search: this.searchParams,
            headers: this.headers
        }, options);
    }
}
