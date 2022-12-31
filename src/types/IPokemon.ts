export interface IPokemonData {
  name: string;
  id: number;
  types: Array<{ type: { name: string } }>;
}
