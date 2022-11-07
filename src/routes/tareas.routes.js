import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  listarTareas,
  obtenerTarea,
} from "../controllers/tareas.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/tareas")
  .get(listarTareas)
  .post(
    [
      check("tarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es obligatorio")
        .isLength({
          min: 2,
          max: 50,
        })
        .withMessage(
          "El nombre de la tarea debe tener entre 2 y 50 caracteres"
        ),
    ],
    crearTarea
  );

router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .put(
    [
      check("tarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es un dato obligatorio")
        .isLength({
          min: 2,
          max: 50,
        })
        .withMessage(
          "El nombre de la tarea debe tener entre 2 y 50 caracteres"
        ),
    ],
    editarTarea
  )
  .delete(borrarTarea);

export default router;
