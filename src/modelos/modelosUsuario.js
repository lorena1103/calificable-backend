import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
{
    compositor: {type: String, required: true},
        nacimiento: {type: Date, required: true},
        cancion: {type: String, required: true},
        cantante: {type: String, required: true},
        anioLanzamiento: {type: Number, required: true},
        vallenato: {type: Boolean, required: true},
});

export default model ( "Usuario", esquemaUsuario);
