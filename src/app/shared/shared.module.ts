import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseLayoutModule } from './base-layout/base-layout.module';
import { AbilitiesModule } from './abilities/abilities.module';
import { StFormModule } from './form/form.module';

@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    BaseLayoutModule,
    AbilitiesModule,
    StFormModule
  ],
  declarations: []
})
export class SharedModule { }
