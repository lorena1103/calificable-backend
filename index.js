"use strict";
const express =require("express");

const servidor = express ();

servidor.get("/", (solicitud, respuesta) =>{
    respuesta.json ({
        saludo: "hola"
    } )
})


servidor.listen (3000);
console.log("perfect")