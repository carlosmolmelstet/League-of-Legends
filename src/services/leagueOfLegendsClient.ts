import axios from 'axios';

export function getLeagueOfLegendsClient(ctx?: any) {
  const api = axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/',
  });

  return api;
}
