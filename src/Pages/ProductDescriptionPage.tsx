import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../Product.css";
import { PokemonContext } from "../PokemonContext";
import getImageUrl from "../utils/helper";
import { PokemonContextType } from "../types";

const ProductDescriptionPage = () => {
  const { name }: { name?: string } = useParams();
  const { pokemonDetails, getPokemonDetails } = React.useContext(
    PokemonContext
  ) as PokemonContextType;

  useEffect(() => {
    if (name) {
      const typedName: string = name;
      getPokemonDetails(typedName);
    }
  }, []);

  if (!pokemonDetails) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  // If object ,function called using ? is undefined or null - it is set to undefined so that no error is thrown
  return (
    <div className="page-container">
      <div className="pokemon-card">
        <div className="pokemon-image">
          <img
            src={getImageUrl(pokemonDetails?.id)}
            className="img-fluid rounded"
            alt={pokemonDetails?.name}
          />
        </div>
        <div className="pokemon-info">
          <h1 className="title">{pokemonDetails?.name}</h1>
          <div className="details">
            <strong>Height:</strong> {pokemonDetails?.height} decimetres
          </div>
          <div className="details">
            <strong>Weight:</strong> {pokemonDetails?.weight} hectograms
          </div>
          <div className="details">
            <strong>Abilities:</strong>
            <ul>
              {pokemonDetails.abilities?.map((ability) => (
                <li key={ability?.ability.name} className="list-item">
                  {ability?.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="details">
            <strong>Forms:</strong>
            <ul>
              {pokemonDetails.forms?.map((form) => (
                <li key={form?.name} className="list-item">
                  {form?.name}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="back-link">
            <button className="back-button">Back to PLP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
