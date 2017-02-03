import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDebounceComponent } from './input-debounce.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ InputDebounceComponent ],
    exports: [ InputDebounceComponent ],
})
export class InputDebounceModule {}
