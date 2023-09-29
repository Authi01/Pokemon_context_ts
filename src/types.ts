export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  forms: { name: string }[];
}

export interface PokemonContextType {
  pokemonList: Pokemon[];
  getPokemonDetails: (name: string) => void;
  pokemonDetails: PokemonDetails | null;
  fetchPokemonList: () => void;
}
