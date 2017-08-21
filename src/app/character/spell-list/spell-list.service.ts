import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StHttpService } from '../../core/index';
import { SpellList } from './spell-list.models';

@Injectable()
export class SpellListService {

  constructor(private http: StHttpService) {
  }

  getSpell(): Observable<SpellList[]> {
    return this.http.get<SpellList[]>('api/spells');
  }

  updateCharacterSpell(spell: SpellList): Observable<void> {
    return this.http.get<any[]>('api/character?url=spells')
      .switchMap((data: any[]) => {
        let spellToUpdate: SpellList = {...spell};

        data[0] = this.memorizeSpell(data[0], spell);

        if (spellToUpdate.parent) {
          spellToUpdate = spellToUpdate.parent;
          const foundSpell: SpellList = spellToUpdate.children.find((spellItem: SpellList) => spellItem.id === spell.id);

          foundSpell.selected = spell.selected;
        }

        return Observable.merge(
          this.http.put<void>(`api/character/${data[0].id}`, data[0]),
          this.http.put<void>(`api/spells/${spellToUpdate.id}`, spellToUpdate)
        )
      });
  }

  memorizeSpell(spellList: SpellList, spell: SpellList): SpellList {
    if (spellList.children) {
      const existingSpell = spellList.children.find((spellItem: SpellList) => spellItem.id === spell.id);

      if (existingSpell) {
        existingSpell.selected = spell.selected;
      } else {
        spellList.children.push(spell);
      }

    } else {
      spellList.children = [spell];
    }

    return spellList;
  }
}
