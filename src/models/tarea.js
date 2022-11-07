import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
    tarea:{
        type: String,
        required: true,
        unique:true,
        minLength:2,
        maxLength:50,
    }
})

//aqui realizamos el modelo
const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;