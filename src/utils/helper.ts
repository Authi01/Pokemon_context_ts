// fetches the image
const getImageUrl = (id: number) => {
  const paddedId = String(id).padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
};

export default getImageUrl;
