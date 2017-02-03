import { NgModule } from '@angular/core';
import { CharacterSheetComponent } from './character-sheet.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CharacterSheetRoutingModule
  ],
  declarations: [CharacterSheetComponent],
  exports: [CharacterSheetComponent]
})
export class CharacterSheetModule { }
