import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app  = express();

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"),()=>{
    console.log("Conectado en el puerto "+ app.get("port"))
})

//----------- middlewares --------------
app.use(morgan("dev"));
//permitir peticiones remotas
app.use(cors());
//interpretar los objetos JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatico
app.use(express.static(path.join(__dirname, "../public")))


//-------------- rutas: nombre de dominio -------------------
// http://localhost:4000/
app.get("/prueba", (req, res)=>{
    res.send("Esto es una prueba de la peticion GET")
})
