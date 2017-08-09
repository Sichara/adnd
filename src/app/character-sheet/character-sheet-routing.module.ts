import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterSheetComponent,
    children: [
      {
        path: 'races',
        component: CharacterSheetComponent,
        data: {
          breadcrumb: 'Races'
        },
        children: [
          {
            path: 'dwarves',
            component: CharacterSheetComponent,
            data: {
              breadcrumb: 'Dwarves'
            }
          },
          {
            path: 'elves',
            component: CharacterSheetComponent,
            data: {
              breadcrumb: 'Elves'
            }
          },
        ]
      }, {
        path: 'abilities',
        component: CharacterSheetComponent,
        data: {
          breadcrumb: 'Abilities'
        },
        children: [
          {
            path: 'strength',
            component: CharacterSheetComponent,
            data: {
              breadcrumb: 'Strength'
            }
          },
          {
            path: 'dexterity',
            component: CharacterSheetComponent,
            data: {
              breadcrumb: 'Dexterity'
            }
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CharacterSheetRoutingModule { }
