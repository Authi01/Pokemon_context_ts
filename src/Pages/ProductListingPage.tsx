import React from "react";
import PokemonCard from "../components/PokemonCard";
import "../Product.css";
import { PokemonContext } from "../PokemonContext";
import getImageUrl from "../utils/helper";
import { Pokemon, PokemonContextType } from "../types";

const ProductListingPage: React.FC = () => {
  const { pokemonList } = React.useContext(
    PokemonContext
  ) as PokemonContextType;

  return (
    <div className="product-listing1">
      <h1 className="centered1">Pokemon List</h1>
      <div className="pokemon-grid1">
        {pokemonList.map((pokemon: Pokemon, index: number) => {
          const imageUrl = getImageUrl(index + 1);
          return (
            <PokemonCard key={index} pokemon={pokemon} imageUrl={imageUrl} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
