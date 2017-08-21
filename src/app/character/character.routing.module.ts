import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from './character-sheet/index';
import { SpellListComponent } from './spell-list/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character-sheet',
    pathMatch: 'full'
  },
      {
        path: 'character-sheet',
        component: CharacterSheetComponent,
        data: {
          breadcrumb: 'Character Sheet'
        }
      },
      {
        path: 'spells',
        component: SpellListComponent,
        data: {
          breadcrumb: 'Spells'
        }
      },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CharacterSheetRoutingModule { }
