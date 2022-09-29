const axios = require('axios');
const { Type, Conn } = require("../db");

const getTypes = async () => {
    const typeResponse = await axios.get('https://pokeapi.co/api/v2/type');
    const results = typeResponse.data.results;

    const types = results.map((result) => {  //*
        return {
            id: Number.parseInt(result.url.slice(31)),
            name: result.name,
        }
    });

    return types;
}

async function run() {
    await Conn.sync();
    const types = await getTypes();
    await Type.bulkCreate(types);
    console.log("Types migrados.");
}

run();