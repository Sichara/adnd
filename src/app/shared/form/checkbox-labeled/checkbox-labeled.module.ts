import { NgModule } from '@angular/core';
import { CheckboxLabeledComponent } from './checkbox-labeled.component';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, CheckboxModule],
    declarations: [CheckboxLabeledComponent],
    exports: [CheckboxLabeledComponent]
})
export class CheckboxLabeledModule {}
