import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CharacterSheetService } from './character-sheet.service';

const CONTENT = {
  '/abilities/strength': `Strength (Str) measures a character's muscle, endurance, and stamina. This ability is
the prime requisite of warriors because they must be physically powerful in order to wear
armor and wield heavy weapons. A fighter with a score of 16 or more in Strength gains a
10% bonus to the experience points he earns.
Furthermore, any warrior with a Strength score of 18 is entitled to roll percentile dice
(see Glossary) to determine exceptional Strength; exceptional Strength improves the
character's chance to hit an enemy, increases the damage he causes with each hit,
increases the weight the character is able to carry without a penalty for encumbrance (see
below), and increases the character's ability to force open doors and similar portals.
The rest of this section on Strength consists of explanations of the columns in Table 1.
Refer to the table as you read.`,
  '/abilities/dexterity': `Dexterity (Dex) encompasses several physical attributes including hand-eye
coordination, agility, reaction speed, reflexes, and balance. Dexterity affects a character's
reaction to a threat or surprise, his accuracy with thrown weapons and bows, and his
ability to dodge an enemy's blows. It is the prime requisite of rogues and affects their
professional skills. A rogue with a Dexterity score of 16 or higher gains a 10% bonus to
the experience points he earns.`,
  '/races/dwarves': `Dwarves are short, stocky fellows, easily identified by their size and shape. They average
4 to 4-_ feet tall. They have ruddy cheeks, dark eyes, and dark hair. Dwarves generally
live for 350 years.
Dwarves tend to be dour and taciturn. They are given to hard work and care little for
most humor. They are strong and brave. They enjoy beer, ale, mead, and even stronger
drink. Their chief love, however, is precious metal, particularly gold. They prize gems, of
course, especially diamonds and opaque gems (except pearls, which they do not like).
Dwarves like the earth and dislike the sea. Not overly fond of elves, they have a fierce
hatred of orcs and goblins. Their short, stocky builds make them ill-suited for riding
horses or other large mounts (although ponies present no difficulty), so they tend to be a
trifle dubious and wary of these creatures. They are ill-disposed toward magic and have
little talent for it, but revel in fighting, warcraft, and scientific arts such as engineering.
Though dwarves are suspicious and avaricious, their courage and tenacity more than
compensate for these shortcomings.`,
  '/races/elves': `Elves tend to be somewhat shorter and slimmer than normal humans. Their features are
finely chiseled and delicate, and they speak in melodic tones. Although they appear
fragile and weak, as a race they are quick and strong. Elves often live to be over 1,200
years old, although long before this time they feel compelled to depart the realms of men
and mortals. Where they go is uncertain, but it is an undeniable urge of their race.
Elves are often considered frivolous and aloof. In fact, they are not, although humans
often find their personalities impossible to fathom. They concern themselves with natural
beauty, dancing and frolicking, playing and singing, unless necessity dictates otherwise.
They are not fond of ships or mines, but enjoy growing things and gazing at the open sky.
Even though elves tend toward haughtiness and arrogance at times, they regard their
friends and associates as equals. They do not make friends easily, but a friend (or enemy)
is never forgotten. They prefer to distance themselves from humans, have little love for
dwarves, and hate the evil denizens of the woods.`
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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: CharacterSheetService) {
  }

  ngOnInit() {
    this.content = this.router.events
      .filter((event: Event) => event instanceof NavigationEnd)
      .map(() => {
        if (CONTENT[this.router.routerState.snapshot.url]) {
          return CONTENT[this.router.routerState.snapshot.url];
        } else {
          return '';
        }
      });

    this.nodes$ = this.service.getContents();
  }

  onContentsClick(url: string): void {
    // this.router.navigate([url], {relativeTo: this.route, });
    const redirectUrl: string = url || '/';

    this.router.navigate([{outlets: {details: null}}], {relativeTo: this.route})
      .then(() => this.router.navigate([redirectUrl]));
  }
}
