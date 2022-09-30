const { Pokemon, Pokemon_Type, Conn } = require("../db");
const axios = require('axios');


const getPokemons = async () => {
    // limit -> tome
    // offset -> omita

    //Se traen todo los pokemones
    // const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
    const results = pokemonResponse.data.results; //se guardan los pokemones en la constante results
    
    //Array vacio para guardar todos los pokemones
    const pokemons = [];

   //se recorren todos los datos de la constante results
    for (const result of results) {
    //se obtienen los detalles de un pokemon
        const detailResponse = await axios.get(result.url);
        //se obtiene el objeto con el detalle del pokemon
        const detail = detailResponse.data;

      //se crea un objeto con los datos de pokemon
        const pokemon = {
            id: detail.id,
            name: result.name,
            picture: detail.sprites.other['official-artwork'].front_default,

            //se itera cada tipo del pokemon para obtener su id y su nombre
            types: detail.types.map((type) => {
                return {
                    id: Number.parseInt(type.type.url.slice(31)),
                    
                    name: type.type.name,
                }
               
            }), 
            
            //se recorren las estadisticas en el array de stats, se agregan los pokemones en el array de pokemons
            hp: detail.stats.find(c => c.stat.name === "hp").base_stat,
            attack: detail.stats.find(c => c.stat.name === "attack").base_stat,
            defense: detail.stats.find(c => c.stat.name === "defense").base_stat,
            speed: detail.stats.find(c => c.stat.name === "speed").base_stat,
            height: detail.height,
            weight: detail.weight,
            fromPokeApi: true,
        };

        pokemons.push(pokemon);
    }

    return pokemons;
}


async function run() {
    const pokemons = await getPokemons();

    await Conn.sync();
    await Pokemon.bulkCreate(pokemons);

    for (const pokemon of pokemons) {
        const pokemonTypes = pokemon.types.map((t) => {
            return {
                TypeId: t.id,
                PokemonId: pokemon.id
            };
        })

        await Pokemon_Type.bulkCreate(pokemonTypes);
        console.log('Finalizado')

    }
}

run();