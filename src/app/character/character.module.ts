import { NgModule } from '@angular/core';
import { CharacterComponent } from './character.component';
import { SharedModule } from '../shared/index';
import { CharacterSheetRoutingModule } from './character.routing.module';
import { CharacterSheetModule } from './character-sheet/index';
import { SpellListModule } from './spell-list/index';

@NgModule({
  imports: [
    SharedModule,
    CharacterSheetRoutingModule,
    CharacterSheetModule,
    SpellListModule
  ],
  declarations: [CharacterComponent],
  exports: [CharacterComponent]
})
export class CharacterModule { }
