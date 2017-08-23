import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpellListService } from './spell-list.service';
import { SpellList, Spell } from './spell-list.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html'
})

export class SpellListComponent implements OnInit {
  spellList$: Observable<SpellList[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: SpellListService) {
  }

  ngOnInit() {
    this.spellList$ = this.service.getSpell();
  }

  onSelectSpell(spell: SpellList): void {
    console.log(spell);

    this.service.updateCharacterSpell(spell).toPromise();
  }

  onContentsClick(url: string): void {
    this.router.navigate([url]);
    // const redirectUrl: string = url || '/';
    //
    // this.router.navigate([{outlets: {details: null}}], {relativeTo: this.route})
    //   .then(() => this.router.navigate([redirectUrl]));
  }
}
