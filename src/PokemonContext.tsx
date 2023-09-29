import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { PokemonContextType } from "./types";

interface PokemonProviderProps {
  children: ReactNode;
}

export const PokemonContext = createContext<PokemonContextType | null>(null);

export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonProvider({
  children,
}: PokemonProviderProps): JSX.Element {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  const fetchPokemonList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setPokemonList(response.data.results);
    });
  };

  const getPokemonDetails = (name: string) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      setPokemonDetails(response.data);
    });
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        getPokemonDetails,
        pokemonDetails,
        fetchPokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
