import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [BreadcrumbsComponent],
  declarations: [BreadcrumbsComponent],
  providers: [],
})
export class BreadcrumbsModule {
}
