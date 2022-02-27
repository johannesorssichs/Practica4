// Primero obtenemos los datos de cada pokemon
fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            printPokemons(json.results);
        });

// Ahora pinta todos los pokemons insertando un HTML dentro de mi id container
function printPokemons(pokemons) 
{
  const container = document.getElementById('container')
  pokemons.forEach(pokemon => {
    container.innerHTML = `
    ${container.innerHTML} 
    <div class="carta">
    <img src="https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png"/> 
    <span>Pokemon Nº${getPokemonId(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, peri si que hay una 
// URL para poder obtener todas las caracteristicas de ese pokemon, siendo una de ellas
// su id. Por ello realizamos dos replace. 

function getPokemonId(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}


