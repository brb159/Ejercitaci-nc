//creando tablas
const { options } = require ("./options/db.js")
const knex = require("knex")(options) //datos de conexion//
//creando tablas//
knex.schema.createTable("ciudades", table =>{
    table.increments("id")
    table.string("name")
    table.integer("poblacion")
})//la promesa//
.then(()=>console.log("table created"))
.catch(err =>{console.log(err);throw err;})
.finally(()=>{
    knex.destroy();
})