const container = document.querySelector('.container');
const colors = {
  normal: '#a8a878',
  fire: '#f08030',
  fighting: '#c03028',
  water: '#6890f0',
  grass: '#78c850',
  poison: '#a040a0',
  electric: '#f8d030',
  ground: '#e0c068',
  psychic: '#f85888',
  rock: '#b8a038',
  ice: '#98d8d8',
  bug: '#a8b820',
  dragon: '#7038f8',
  ghost: '#705898',
  fairy: '#ee99ac',
};

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
  const pokeContainer = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h2');

  pokeContainer.classList.add('pokemon');
  pokeContainer.style.backgroundColor = colors[pokemon.types[0].type.name];

  image.src = pokemon.sprites.front_default;
  name.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  pokeContainer.append(image, name);
  container.append(pokeContainer);
};

getPokemon(151);
