// consulta select//
const { options } = require ("./options/db.js")
const knex = require("knex")(options)//datos de conexion//
//no sale el id por que no esta siendo buscada, solo con el select y luego agregandole el where//
knex.from("ciudades").select("name","poblacion").where("poblacion", ">", "1000")
.then((rows)=>{
    console.log(rows)
})
.then(()=>console.log("found where"))
.catch(err =>{console.log(err);throw err;})
.finally(()=>{
    knex.destroy();
})