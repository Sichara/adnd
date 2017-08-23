import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CharacterSheetService } from './character-sheet.service';
import { toNumber } from 'lodash';

const ABILITIES: any = {
  dexterity: [
    NaN,
    -6,
    -4,
    -3,
    -2,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    2
  ],
  strength: [
    NaN,
    -5,
    -3,
    -3,
    -2,
    -2,
    -1,
    -1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
    ]
};

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterSheetComponent implements OnInit {
  content: Observable<string>;

  nodes$: Observable<any>;

  toHit: number;
  dexterity: number = 1;
  strength: number = 1;
  magic: boolean = false;
  magicAdj: number = 1;
  disposition: string = '0';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: CharacterSheetService) {
  }

  ngOnInit() {
    this.nodes$ = this.service.getContents();
    this.getToHitModification();
  }

  onContentsClick(url: string): void {
    // this.router.navigate([url], {relativeTo: this.route, });
    const redirectUrl: string = url || '/';

    this.router.navigate([{outlets: {details: null}}], {relativeTo: this.route})
      .then(() => this.router.navigate([redirectUrl]));
  }

  getToHitModification(): void {
    this.toHit = ABILITIES['strength'][this.strength] + ABILITIES['dexterity'][this.dexterity];
    this.toHit += this.magic ? this.magicAdj : 0;
    this.toHit += toNumber(this.disposition);
  }
}
