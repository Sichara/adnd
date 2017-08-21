import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { BreadcrumbsModule } from '../breadcrumbs/index';
import { CoreModule } from '../../core/index';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbsModule,
    CoreModule
  ],
  declarations: [BaseLayoutComponent],
  exports: [BaseLayoutComponent]
})
export class BaseLayoutModule { }
