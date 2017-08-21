import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreloaderComponent } from './preloader.component';
import { PreloaderService } from './preloader.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [PreloaderComponent],
    declarations: [PreloaderComponent],
    providers: [PreloaderService]
})
export class PreloaderModule {}
