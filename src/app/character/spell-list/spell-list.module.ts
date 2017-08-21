import { NgModule } from '@angular/core';

import { SpellListComponent } from './spell-list.component';
import { SpellListService } from './spell-list.service';
import { SharedModule } from '../../shared/index';

@NgModule({
  imports: [SharedModule],
  exports: [SpellListComponent],
  declarations: [SpellListComponent],
  providers: [SpellListService],
})
export class SpellListModule {
}
