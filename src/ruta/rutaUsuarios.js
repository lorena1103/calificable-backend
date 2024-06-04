import { Router } from "express";
import ControladorUsuarios from "../controlador/controladorUsuarios.js";

const enrutadorUsuarios= Router();

enrutadorUsuarios.post("/", ControladorUsuarios.crearUsuario);
enrutadorUsuarios.get("/:id", ControladorUsuarios.leerUsuario);
enrutadorUsuarios.get("/", ControladorUsuarios.leerUsuarios);
enrutadorUsuarios.put("/:id", ControladorUsuarios.actualizarUsuario);
enrutadorUsuarios.delete("/:id", ControladorUsuarios.eliminarUsuario);

export default enrutadorUsuarios;

