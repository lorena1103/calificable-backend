import express from "express";
import morgan from "morgan";
import enrutadorUsuarios from "./ruta/rutaUsuarios.js";


const servidor = express ();

servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);
servidor.use(morgan("dev"));

servidor.get("/", function (req, res){
    res.json({mensaje: "holi"});
})

export default servidor;