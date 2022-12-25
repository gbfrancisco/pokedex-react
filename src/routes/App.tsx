import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/mewtwo');
    };
  }, []);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
