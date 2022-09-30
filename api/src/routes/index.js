const { ValidationError } = require('sequelize');
const { Router } = require('express');
const { Pokemon, Type } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//unifica la forma de acceder a la informacion

router.get('/pokemons', async (request, response) => {
  const name = request.query.name;
  if (name) {
    const pokemon = await Pokemon.findOne({ where: { name }, include: Type });

    if (!pokemon) {
      return response.status(404).send({ error: 'El pokemon no existe' });
    }

    return response.json(pokemon);
  }

  const pokemons = await Pokemon.findAll({ include: Type });

  response.json(pokemons);
});

router.get('/pokemons/:id', async (request, response) => {
  const id = Number(request.params.id);

  if (Number.isNaN(id)) {
    return response.status(400).send({ error: 'El id no es valido' });
  }
  //busca por llav eprimaria el id en la base de datos
  const pokemon = await Pokemon.findByPk(id, { include: Type });
  if (!pokemon) {
    return response.status(404).send({ error: 'El pokemon no existe' });
  }
  return response.send(pokemon);
});
//creacion de pokemones
router.post('/pokemons', async (request, response) => {
  const body = request.body;

  try {
    const pokemon = await Pokemon.create(body, {
      //*
      fields: [
        'name',
        'picture',
        'hp',
        'attack',
        'defense',
        'speed',
        'height',
        'weight',
      ],
    });
    response.send(await Pokemon.findByPk(pokemon.id, { include: Type }));
  } catch (error) {
    if (error instanceof ValidationError) {
      return response.status(400).send(error.errors.map((e) => e.message)); //** */
    } else {
      return response.status(500).send({ error: error.message });
    }
  }
});

router.get('/types', async (request, response) => {
  const types = await Type.findAll();
  response.json(types);
});

// router.delete('/pokemons', async (request, response) =>{

// });

module.exports = router;
