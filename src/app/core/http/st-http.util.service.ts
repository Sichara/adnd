import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { bind } from 'bind-decorator';
import { HttpRequest, ErrorMessage } from './st-http.models';
import { CONTENT_TYPE } from './st-http.config';
import { NotificationService } from '../notifications/index';
import { PreloaderService } from '../preloader/index';
import { BlockScreenService } from '../block-screen/index';

@Injectable()
export class StHttpUtilService {
    private API: string;

    constructor(private notification: NotificationService,
                private blockScreenService: BlockScreenService,
                private preloader: PreloaderService) {
        this.API = '';
    }

    generateAPIUrl(url: string): string {
        return `${this.API}${url}`;
    }

    convertResponse<T>(data: Response): T | string {
        const responseContentType: string = data.headers.get('content-type');

        if (responseContentType && responseContentType.includes(CONTENT_TYPE.JSON)) {
            return data.text() ? data.json().data : '';
        }

        if (responseContentType && responseContentType.includes(CONTENT_TYPE.TEXT)) {
            return data.text();
        }

        return '';
    }

    requestToString(request: HttpRequest): string {
        const queryString: string[] = [];

        (request.options.search as URLSearchParams).paramsMap
            .forEach((value: string[], key: string): void => {
                queryString.push(`${key}=${value}`);
            });

        return request.url + queryString.join('&');
    }

    @bind
    responseProcessor<T>(input: Observable<Response>): Observable<T> {
        return input.map<Response, T>(this.convertResponse)
            .do(
                this.onRequestEnd,
                (error: ErrorMessage) => {
                    this.notification.error(error._body);
                    this.onRequestEnd();
                }
            )
            .catch(() => Observable.empty());
    }

    @bind
    onError(message: string): void {
        this.notification.error(message);
    }

    @bind
    hideLoading(): void {
        this.preloader.hideLoading();
    }

    @bind
    onLoading<T>(req: Observable<T>): void {
        this.preloader.showLoading<T>(req);
    }

    @bind
    onRequestStart(showBlockScreen: boolean = true): void {
        if (showBlockScreen) {
            this.blockScreenService.showBlockScreen();
        }
    }

    @bind
    onRequestEnd(): void {
        this.blockScreenService.hideBlockScreen();
    }
}
