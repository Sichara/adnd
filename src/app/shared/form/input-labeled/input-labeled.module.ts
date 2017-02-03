import { NgModule } from '@angular/core';
import { InputLabeledComponent } from './input-labeled.component';
import { CommonModule } from '@angular/common';
import { InputModule } from '../input/input.module';

@NgModule({
    imports: [CommonModule, InputModule],
    declarations: [InputLabeledComponent],
    exports: [InputLabeledComponent]
})
export class InputLabeledModule {}
