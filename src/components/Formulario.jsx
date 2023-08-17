import Swal from 'sweetalert2';
import { useState } from "react";

const Formulario = ({addTarea}) => {


  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [state, setState] = useState("pendiente");

    const [tarea, setTarea] = useState({
        title : "",
        description : "",
        state : "pendiente",
        priority : false
    });

    const {title,description,priority,state} = tarea;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() || !description.trim()) {
            return Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Debes rellenar todos los campos',
                        footer: '<a href="">Why do I have this issue?</a>'
            })
        }else {
            console.log(title,description,priority,state);
            
            addTarea({
                id: Date.now(),
                ...tarea,
                state: state === "completado" 
            })

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tarea agregada correctamente',
                showConfirmButton: false,
                timer: 1500
            })
            
            
            
            setTarea({
                title : "",
                description : "",
                state : "pendiente",
                priority : false
            });
        }
    }

const handleChange = (e) => {

    const {name, type, checked, value} = e.target;

    setTarea({
    ...tarea,
    [name] : type === "checkbox" ? checked : value
    // ...tarea, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    });
};

return (
    <>
        <form onSubmit={handleSubmit} className="form-control mt-5 mb-5">
            <input
                type="text"
                name="title"
                placeholder="Ingrese Tarea"
                className="form-control mb-3"
                value={title}
                onChange={handleChange}
                // onChange={event => setTarea({...tarea, title: event.target.value})}
            />

            <textarea
                className="form-control mb-3"
                placeholder="Ingrese Descripcion"
                name="description"
                value={description}
                onChange={handleChange}
            // onChange={event => setTarea({...tarea, description: event.target.value})}
            />
            <div className="form-check">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="input-check"
                    checked={priority}
                    onChange={(e)=> setTarea({...tarea, priority: e.target.checked})}
                />
                <label htmlFor="input-check">Dar Prioridad</label>
            </div>

            <select
                className="form-control mb-3"
                name="state"
                value={state}
                onChange={handleChange}
                // onChange={event => setTarea({...tarea, state: event.target.value})}
                >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" className="btn btn-success mb-2">Agregar Tarea</button>
        </form>
    </>
    )
}

export default Formulario;