import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseLayoutModule } from './base-layout/base-layout.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BaseLayoutModule
  ],
  declarations: []
})
export class SharedModule { }
