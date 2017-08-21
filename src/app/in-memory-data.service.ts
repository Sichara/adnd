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
            name: 'Sleep'
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

    const character = [
      {
        id: 0,
        name: 'My Spells',
        url: 'spells'
      },
      {
        id: 1,
        name: 'Ability Scores',
        url: 'abilities',
        children: [
          {
            id: 2,
            name: 'Strength',
            url: 'strength'
          },
          {
            id: 3,
            name: 'Dexterity',
            url: 'dexterity'
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
            url: 'dwarves'
          },
          {
            id: 6,
            name: 'Elves',
            url: 'elves'
          }
        ]
      }
    ];

    return {
      spells,
      character
    };
  }
}
