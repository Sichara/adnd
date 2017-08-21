import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpellListService } from './spell-list.service';
import { SpellList, Spell } from './spell-list.models';

@Component({
  moduleId: module.id,
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html'
})

export class SpellListComponent implements OnInit {
  spellList$: Observable<SpellList[]>;

  constructor(private service: SpellListService) {
  }

  ngOnInit() {
    this.spellList$ = this.service.getSpell();
  }

  onSelectSpell(spell: SpellList): void {
    console.log(spell);

    this.service.updateCharacterSpell(spell).toPromise();
  }
}
