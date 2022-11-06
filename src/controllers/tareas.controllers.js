

export const listarTareas = (req, res)=>{
    res.send("aqui tengo que retornar un arreglo de tareas")
}

export const crearTarea = (req, res)=>{
    //extraer del body los datos
    console.log(req.body)
    //agregar validaciones
    //guardar en la base de datos
    res.send("Esto es una prueba de la peticion POST")
}