import { useEffect, useState } from 'react';
import { getPokemonData } from '../app/axios/axiosApi';
import { IPokemon } from '../app/interfaces/pokemonInterfaces';

const App = () => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);
  useEffect(() => {
    getPokemonData('mewtwo').then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }, []);
  return (
    <div>
      <h1 className="font-semibold text-3xl text-blue-600">Hello World</h1>
      <div>Your Pokémon is: {pokemon && pokemon.name}</div>
    </div>
  );
};

export default App;
