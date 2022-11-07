import { validationResult } from "express-validator";
import Tarea from "../models/tarea";



export const listarTareas = async (req, res) => {
  try {
    const listaTareas = await Tarea.find();
    res.status(200).json(listaTareas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar las tareas",
    });
  }
};

export const crearTarea = async (req, res) => {

const errores =validationResult(req);
if(!errores.isEmpty()){
return res.status(400).json({
  errores: errores.array()
})
}

  try {
    console.log(req.body);
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();
    res.status(201).json({
      mensaje: "El producto fue agregado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    console.log(req.params.id);
    const tareaBuscada = await Tarea.findById(req.params.id);
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo encontrar el producto solicitado",
    });
  }
};

export const editarTarea = async (req, res) => {
  try {
   await Tarea.findByIdAndUpdate(req.params.id,req.body);
  res.status(200).json({
    mensaje: "El producto fue editado correctamente"
  })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo encontrar el producto solicitado",
    });
  }
};
export const borrarTarea = async (req, res) => {
  try {
  await Tarea.findByIdAndDelete(req.params.id)
  res.status(200).json({
    mensaje:"El producto fue correctamente eliminado"
  })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error el producto solicitado no puedo ser eliminado",
    });
  }
};