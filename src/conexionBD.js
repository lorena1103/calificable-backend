import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
console.log("bien, conectado a la base de datos");
}).catch((error)=>{
    console.log("mal, ocurrio un error y no se conecto a la base de datos")
})