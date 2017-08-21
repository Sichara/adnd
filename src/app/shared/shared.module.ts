import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { RouterModule } from '@angular/router';

import * as modules from './modules';
// import * as services from './services';

import { toArray } from 'lodash';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
  ],
  exports: [
    modules.TableOfContentsModule,
    modules.BreadcrumbsModule,
    modules.BaseLayoutModule,
    // ...toArray<NgModule[]>(modules),
    CommonModule,
    FormsModule,
    TreeModule,
    RouterModule,
    HttpModule
  ],
  declarations: []
})
export class SharedModule { }
