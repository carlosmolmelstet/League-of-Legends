import { leagueOfLegends } from '@services/apiClients';

export interface Champion {
  id: string;
  name: string;
  title: string;
}

export async function getChampions(): Promise<Champion[]> {
  const response = await leagueOfLegends
    .get('champion.json')
    .then(e => Object.keys(e.data.data).map(champion => e.data.data[champion]));

  const data: Champion[] = response.map(champion => ({
    id: champion.id,
    name: champion.name,
    title: champion.title,
  }));

  return data;
}
