import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PreloaderService } from './preloader.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'app-preloader',
    templateUrl: 'preloader.component.html',
    styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnDestroy {
    public loading$: Observable<boolean>;
    public loadingChecker: Subscription;

    constructor(private preloader: PreloaderService) {
    }

    ngOnInit(): void {
        this.loading$ = this.preloader.isShowLoading();
        this.loadingChecker = this.preloader.loadingChecker().subscribe();
    }

    ngOnDestroy(): void {
        this.loadingChecker.unsubscribe();
    }
}
