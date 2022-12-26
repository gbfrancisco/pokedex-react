import axios from 'axios';
import { IPokemon } from '../interfaces/pokemonInterfaces';

export const getPokemonData = async (str: string): Promise<IPokemon> => {
  const axiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  });

  const { data } = await axiosInstance.get(str);
  return data;
};
