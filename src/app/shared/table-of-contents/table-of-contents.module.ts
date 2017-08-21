import { NgModule } from '@angular/core';
import { TableOfContentsComponent } from './table-of-contents.component';
import { TreeModule } from 'angular-tree-component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [TreeModule, RouterModule, CommonModule],
  exports: [TableOfContentsComponent],
  declarations: [TableOfContentsComponent],
})
export class TableOfContentsModule {
}
