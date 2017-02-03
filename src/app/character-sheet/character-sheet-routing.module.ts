import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet.component';

const routes: Routes = [
  {
    path: 'home',
    component: CharacterSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CharacterSheetRoutingModule { }
