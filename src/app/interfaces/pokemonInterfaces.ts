export interface IPokemon {
  name: string;
  id: number;
  types: Array<{ type: { name: string } }>;
}
