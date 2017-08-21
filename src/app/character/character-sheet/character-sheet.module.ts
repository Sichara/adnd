import { NgModule } from '@angular/core';
import { CharacterSheetComponent } from './character-sheet.component';
import { SharedModule } from '../../shared/index';
import { CharacterSheetService } from './character-sheet.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [CharacterSheetComponent],
  exports: [CharacterSheetComponent],
  providers: [CharacterSheetService]
})
export class CharacterSheetModule { }
