//insertando datos
const { options } = require ("./options/db.js")
const knex = require("knex")(options)//datos de conexion//
//insertando valores a las tablas//
const cities = [
    { name: "Bogota", poblacion: 7181},
    { name: "Buenos Aires", poblacion: 3075},
    { name: "La plata", poblacion: 193},
    { name: "Mendoza", poblacion: 115}
]
//primero seleccionamos la tabla y luego los datos en array//
knex("ciudades").insert(cities)
.then(()=>console.log("data inserted created"))
.catch(err =>{console.log(err);throw err;})
.finally(()=>{
    knex.destroy();
})