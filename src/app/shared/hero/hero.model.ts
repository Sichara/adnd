import { Enum } from '../enum/enum';

export class Abilities extends Enum<string> {
  public static readonly Strength = new Enum('Strength');
  public static readonly Dexterity = new Enum('Dexterity');
  public static readonly Constitution = new Enum('Constitution');
  public static readonly Intelligence = new Enum('Intelligence');
  public static readonly Wisdom = new Enum('Wisdom');
  public static readonly Charisma = new Enum('Charisma');
}

export type HeroAbilities = Map<Abilities, number>;

export interface AbilityModificators {
  inc: {
    type: Abilities;
    value: number;
  };
  dec: {
    type: Abilities;
    value: number;
  };
}

export class Race {
  constructor(public name: string,
              public modificators: AbilityModificators) {
  }

  protected toString(): string {
    return this.name;
  }
}

export class HeroClass extends Enum<string> {
  public static readonly Fighter = new Enum('Fighter');
  public static readonly Paladin = new Enum('Paladin');
  public static readonly Ranger = new Enum('Ranger');
  public static readonly Mage = new Enum('Mage');
  public static readonly Specialist = new Enum('Specialist');
  public static readonly Cleric = new Enum('Cleric');
  public static readonly Druid = new Enum('Druid');
  public static readonly Thief = new Enum('Thief');
  public static readonly Bard = new Enum('Bard');
}

export class HeroRace extends Enum<Race> {
  public static readonly Dwarf = new Enum(new Race(
    'Dwarf', {
      inc: {
        type: Abilities.Constitution,
        value: 1
      },
      dec: {
        type: Abilities.Charisma,
        value: 1
      }
    }
  ));
  public static readonly Elf = new Enum(new Race(
    'Elf', {
      inc: {
        type: Abilities.Dexterity,
        value: 1
      },
      dec: {
        type: Abilities.Constitution,
        value: 1
      }
    }
  ));
  public static readonly Gnome = new Enum(new Race(
    'Gnome',
    {
      inc: {
        type: Abilities.Intelligence,
        value: 1
      },
      dec: {
        type: Abilities.Wisdom,
        value: 1
      }
    }
  ));
  public static readonly HalfElf = new Enum(new Race(
    'Half-Elf',
    {
      inc: {
        type: Abilities.Dexterity,
        value: 0
      },
      dec: {
        type: Abilities.Constitution,
        value: 0
      }
    }
  ));
  public static readonly Halfling = new Enum(new Race(
    'Half-Elf',
    {
      inc: {
        type: Abilities.Dexterity,
        value: 1
      },
      dec: {
        type: Abilities.Strength,
        value: 1
      }
    }
  ));
  public static readonly Human = new Enum(new Race(
    'Half-Elf',
    {
      inc: {
        type: Abilities.Dexterity,
        value: 0
      },
      dec: {
        type: Abilities.Constitution,
        value: 0
      }
    }
  ));
}

export interface Hero {
  name: string;
  level: number;
  abilities: HeroAbilities;
  heroClass: HeroClass;
  race: HeroRace
}
