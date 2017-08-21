import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CachedObservables } from './cache.models';
import { PreloaderService } from '../preloader/index';

const BUFFER_SIZE: number = 1;

@Injectable()
export class CacheService {
    private cachedHttpRequests: CachedObservables = {};

    constructor(private preloader: PreloaderService) { }

    cacheHttp<T>(uniqueKey: string, httpMethod$: Observable<T>, updateCache: boolean): Observable<T> {
        if (updateCache) {
            this.removeFromCache(uniqueKey);
        }

        return this.getDataFromCache<T>(uniqueKey, httpMethod$);
    }

    private removeFromCache(uniqueKey: string): void {
        this.cachedHttpRequests[uniqueKey] = undefined;
    }

    private getDataFromCache<T>(uniqueKey: string, newData: Observable<T>): Observable<T> {
        if (!this.cachedHttpRequests[uniqueKey]) {
            this.preloader.showLoading(newData);
            this.cachedHttpRequests[uniqueKey] = newData.publishReplay(BUFFER_SIZE).refCount();
        }

        return this.cachedHttpRequests[uniqueKey];
    }
}
