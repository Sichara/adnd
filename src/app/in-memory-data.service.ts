import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const spells: any = [
      {
        id: 1,
        name: 'Level 1',
        children: [
          {
            id: 2,
            name: 'Sleep',
            url: 'help/sleep'
          },
          {
            id: 3,
            name: 'Magic Missile'
          }
        ]
      },
      {
        id: 4,
        name: 'Level 2',
        children: [
          {
            id: 5,
            name: 'Knock'
          },
          {
            id: 6,
            name: 'Web'
          }
        ]
      }
    ];

    const info = [
      {
        id: 0,
        name: 'sleep',
        content: `
        <table class="table table-bordered">
	<tbody>
		<tr>
			<td style="width: 50.0000%;">Range: 30 yds
				<br>
			</td>
			<td style="width: 50.0000%;">Components: V, S, M
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 50.0000%;">Duration: 5 rds./level
				<br>
			</td>
			<td style="width: 50.0000%;">Casting Time: 1
				<br>
			</td>
		</tr>
		<tr>
			<td style="width: 50.0000%;">Area of Effect: Special
				<br>
			</td>
			<td style="width: 50.0000%;">Saving Throw: None
				<br>
			</td>
		</tr>
	</tbody>
</table>
When a wizard casts a sleep spell, he causes a comatose slumber to come upon one or
more creatures (other than undead and certain other creatures specifically excluded from
the spell's effects). All creatures to be affected by the sleep spell must be within 30 feet of
each other. The number of creatures that can be affected is a function of Hit Dice or
levels. The spell affects 2d4 Hit Dice of monsters. Monsters with 4+3 Hit Dice (4 Hit
Dice plus 3 hit points) or more are unaffected. The center of the area of effect is
determined by the spellcaster. The creatures with the least Hit Dice are affected first, and
partial effects are ignored.
For example, a wizard casts sleep at three kobolds, two gnolls, and an ogre. The roll
(2d4) result is 4. All the kobolds and one gnoll are affected (_ + _ + _ + 2 = 3 _ Hit Dice).
Note that the remainder is not enough to affect the last gnoll or the ogre.
Slapping or wounding awakens affected creatures but normal noise does not.
Awakening requires one entire round. Magically sleeping opponents can be attacked with
substantial bonuses (see "Modifiers to the Attack Roll" in Chapter 9: Combat).
The material component for this spell is a pinch of fine sand, rose petals, or a live
cricket`
      },
      {
        id: 1,
        name: 'strength',
        content: `
<img src="assets/strength.png" class="img-thumbnail">
        <div class="table-content">
        <table class="table table-bordered">
	<tbody>
		<tr>
			<th>Ability Score
			</th>
			<th>Hit Prob.
			</th>
			<th>Dmg Adj.
			</th>
			<th>Weight Allow.
			</th>
			<th>Max Press
			</th>
			<th>Open Doors
			</th>
			<th>Bend Bars/ Lift Gates
			</th>
			<th>Notes
			</th>
		</tr>
		<tr>
			<td>1</td>
			<td>-5</td>
			<td>-4</td>
			<td>1</td>
			<td>3</td>
			<td>1</td>
			<td>0%</td>
			<td></td>
		</tr>
		<tr>
			<td>2</td>
			<td>-3</td>
			<td>-2</td>
			<td>1</td>
			<td>5</td>
			<td>1</td>
			<td>0%</td>
			<td></td>
		</tr>
		<tr>
			<td>3</td>
			<td>-3</td>
			<td>-1</td>
			<td>5</td>
			<td>10</td>
			<td>2</td>
			<td>0%</td>
			<td></td>
		</tr>
		<tr>
			<td>4-5</td>
			<td>-2</td>
			<td>-1</td>
			<td>10</td>
			<td>25</td>
			<td>3</td>
			<td>0%</td>
			<td></td>
		</tr>
		<tr>
			<td>6-7</td>
			<td>-1</td>
			<td>None</td>
			<td>20</td>
			<td>55</td>
			<td>3</td>
			<td>0%</td>
			<td></td>
		</tr>
		<tr>
			<td>8-9</td>
			<td>Normal</td>
			<td>None</td>
			<td>35</td>
			<td>90</td>
			<td>5</td>
			<td>1%</td>
			<td></td>
		</tr>
		<tr>
			<td>10-11</td>
			<td>Normal</td>
			<td>None</td>
			<td>40</td>
			<td>115</td>
			<td>6</td>
			<td>2%</td>
			<td></td>
		</tr>
		<tr>
			<td>12-13</td>
			<td>Normal</td>
			<td>None</td>
			<td>45</td>
			<td>140</td>
			<td>7</td>
			<td>4%</td>
			<td></td>
		</tr>
		<tr>
			<td>19</td>
			<td>+3</td>
			<td>+7</td>
			<td>485</td>
			<td>640</td>
			<td>16(8)</td>
			<td>50%</td>
			<td>Hill Giant</td>
		</tr>
	</tbody>
</table>
</div>
        Strength (Str) measures a character's muscle, endurance, and stamina. This ability is
the prime requisite of warriors because they must be physically powerful in order to wear
armor and wield heavy weapons. A fighter with a score of 16 or more in Strength gains a
10% bonus to the experience points he earns.
Furthermore, any warrior with a Strength score of 18 is entitled to roll percentile dice
(see Glossary) to determine exceptional Strength; exceptional Strength improves the
character's chance to hit an enemy, increases the damage he causes with each hit,
increases the weight the character is able to carry without a penalty for encumbrance (see
below), and increases the character's ability to force open doors and similar portals.
The rest of this section on Strength consists of explanations of the columns in Table 1.
Refer to the table as you read.`
      },
      {
        id: 2,
        name: 'dexterity',
        content: `Dexterity (Dex) encompasses several physical attributes including hand-eye
coordination, agility, reaction speed, reflexes, and balance. Dexterity affects a character's
reaction to a threat or surprise, his accuracy with thrown weapons and bows, and his
ability to dodge an enemy's blows. It is the prime requisite of rogues and affects their
professional skills. A rogue with a Dexterity score of 16 or higher gains a 10% bonus to
the experience points he earns.`
      },
      {
        id: 3,
        name: 'dwarves',
        content: `Dwarves are short, stocky fellows, easily identified by their size and shape. They average
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
compensate for these shortcomings.`
      },
      {
        id: 3,
        name: 'elves',
        content: `Elves tend to be somewhat shorter and slimmer than normal humans. Their features are
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
      }
    ];

    const character = [
      {
        id: 0,
        name: 'My Spells',
        url: 'spells',
        children: []
      },
      {
        id: 1,
        name: 'Ability Scores',
        url: 'abilities',
        children: [
          {
            id: 2,
            name: 'Strength',
            url: 'help/strength'
          },
          {
            id: 3,
            name: 'Dexterity',
            url: 'help/dexterity'
          }
        ]
      },
      {
        id: 4,
        name: 'Player Character Races',
        url: 'races',
        children: [
          {
            id: 5, name: 'Dwarves',
            url: 'help/dwarves'
          },
          {
            id: 6,
            name: 'Elves',
            url: 'help/elves'
          }
        ]
      }
    ];

    return {
      spells,
      character,
      info
    };
  }
}
