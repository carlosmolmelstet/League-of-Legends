import { leagueOfLegends } from '@services/apiClients';

export interface Skin {
  id: string;
  num: number;
  name: string;
}

export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface Stats {
  hp: number;
  mp: number;
  movespeed: number;
  armor: number;
  spellblock: number;
  attackrange: number;
  hpregen: number;
  mpregen: number;
  crit: number;
  attackdamage: number;
  attackspeed: number;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  key?: string;
  image: {
    full: string;
  };
}

export interface Data {
  id: string;
  key: string;
  name: string;
  title: string;
  skins: Skin[];
  lore: string;
  tags: string[];
  info: Info;
  stats: Stats;
  spells: Spell[];
  passive: Spell;
}

export interface Response {
  type: string;
  format: string;
  version: string;
  data: any;
}

const spellKeys = ['Q', 'W', 'E', 'R'];

export async function getChampion(id: string) {
  const response = await leagueOfLegends
    .get<Response>('champion/' + id + '.json')
    .then(response => response.data.data[id] as Data);

  response.spells = response.spells.map((spell, index) => ({
    ...spell,
    key: spellKeys[index],
  }));

  return response;
}
