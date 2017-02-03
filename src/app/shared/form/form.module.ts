import { NgModule } from '@angular/core';
import { CheckboxModule } from './checkbox/index';
import { ButtonModule } from './button/index';
import { CheckboxLabeledModule } from './checkbox-labeled/index';
import { InputModule } from './input/index';
import { InputDebounceModule } from './input-debounce/index';
import { SelectModule } from './select/index';
import { InputLabeledModule } from './input-labeled/input-labeled.module';

@NgModule({
  imports: [
    ButtonModule,
    CheckboxLabeledModule,
    CheckboxModule,
    InputModule,
    InputDebounceModule,
    SelectModule,
    InputLabeledModule,
  ],
  exports: [
    ButtonModule,
    CheckboxLabeledModule,
    CheckboxModule,
    InputModule,
    InputDebounceModule,
    SelectModule,
    InputLabeledModule
  ]
})
export class StFormModule {
}
