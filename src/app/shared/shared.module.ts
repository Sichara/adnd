import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseLayoutModule } from './base-layout/base-layout.module';
// import { AbilitiesModule } from './abilities/abilities.module';
// import { StFormModule } from './form/form.module';
import { BreadcrumbsModule } from './breadcrumbs/index';
import { TreeModule } from 'angular-tree-component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    BaseLayoutModule,
    // AbilitiesModule,
    // StFormModule,
    TreeModule,
    BreadcrumbsModule,
    RouterModule
  ],
  declarations: []
})
export class SharedModule { }
