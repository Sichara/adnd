import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlockScreenService } from './block-screen.service';

@Component({
    moduleId: module.id,
    selector: 'app-block-screen',
    templateUrl: 'block-screen.component.html'
})
export class BlockScreenComponent implements OnInit {
    public showBlockScreen$: Observable<boolean>;

    constructor(private blockScreenService: BlockScreenService) {
    }

    ngOnInit(): void {
        this.showBlockScreen$ = this.blockScreenService.isShowLoading();
    }
}
