import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockScreenComponent } from './block-screen.component';
import { BlockScreenService } from './block-screen.service';
import { ProgressModule } from './progress/index';

@NgModule({
    imports: [
        CommonModule,
        ProgressModule
    ],
    exports: [BlockScreenComponent],
    declarations: [BlockScreenComponent],
    providers: [BlockScreenService]
})
export class BlockScreenModule {}
