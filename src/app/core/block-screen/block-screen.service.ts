import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { bind } from 'bind-decorator';

@Injectable()
export class BlockScreenService {
    // TODO change logic to state service instead of Subjects
    private showLoading$: Subject<boolean> = new Subject();

    constructor() {
    }

    isShowLoading(): Observable<boolean> {
        return this.showLoading$;
    }

    @bind
    showBlockScreen(): void {
        this.showLoading$.next(true);
    }

    @bind
    hideBlockScreen(): void {
        this.showLoading$.next(false);
    }
}
