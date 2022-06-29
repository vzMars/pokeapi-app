const getPokemon = (limit) => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then((res) => res.json())
    .then(({ results }) =>
      Promise.all(results.map((result) => fetch(result.url)))
    )
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((pokemon) => pokemon.forEach((pokemon) => renderPokemon(pokemon)))
    .catch((err) => {
      console.log(`error: ${err}`);
    });
};

const renderPokemon = (pokemon) => {
  console.log(pokemon);
};

getPokemon(6);
