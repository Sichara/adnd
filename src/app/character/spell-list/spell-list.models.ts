export interface Spell {
  id: number,
  name: String,
  selected?: boolean;
  parent?: Spell;
}

export interface SpellList extends Spell {
  children?: Spell[];
}
