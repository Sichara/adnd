import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const BUFFER_TIME: number = 100;

@Injectable()
export class PreloaderService {
    private showLoading$: Subject<boolean> = new Subject();
    private loadingChecker$: Subject<Observable<any>> = new Subject();

    constructor() {
    }

    loadingChecker(): Observable<any> {
        return this.loadingChecker$.bufferTime(BUFFER_TIME)
            .filter((result: Observable<any>[]) => !!result.length)
            .switchMap((result: Observable<any>[]) => {
                this.showLoading$.next(true);
                return Observable.combineLatest(result);
            })
            .do(
                () => this.showLoading$.next(false),
                () => this.showLoading$.next(false)
            );
    }

    isShowLoading(): Observable<boolean> {
        return this.showLoading$;
    }

    showLoading<T>(request: Observable<T>): void {
        this.loadingChecker$.next(request);
    }

    hideLoading(): void {
        this.showLoading$.next(false);
    }
}
