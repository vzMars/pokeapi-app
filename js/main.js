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

const fetchPokemon = async (limit) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const { results } = await response.json();

    const pokemonDetails = results.map(async (result) => {
      const response = await fetch(result.url);
      return response.json();
    });

    const pokemon = await Promise.all(pokemonDetails);

    pokemon.forEach((poke) => {
      renderPokemon(poke);
    });
  } catch (error) {
    console.log(error);
  }
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

fetchPokemon(151);
