// Temporary Page
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosClient from '@lib/axios-wrapper';
import { IPokemonData } from '@custom-types/IPokemon';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<IPokemonData | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const client = new AxiosClient();
    client.get<IPokemonData>(`pokemon/${id}`).then((res) => setPokemon(res));
  }, []);
  return (
    <div>
      <h1>
        {pokemon?.name} #{pokemon?.id}
      </h1>
    </div>
  );
};

export default PokemonPage;
