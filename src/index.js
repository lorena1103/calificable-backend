//const express =require("express");
import "dotenv/config";
import "./conexionBD.js";
import servidor from "./servidor.js"

servidor.listen (3000, ()=>{
console.log("perfect")
})
