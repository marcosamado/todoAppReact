import Tarea from "./Tarea";

const Tareas = ({tareas,deleteTarea,updateTarea}) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Tareas</h2>
            {
                tareas.length === 0 ? <h4 className="text-center">No hay tareas</h4> : <ul className="list-group">
                {tareas.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea} deleteTarea={deleteTarea} updateTarea={updateTarea}/>
                ))}
            </ul>
            }
            
        </div>
    )
}

export default Tareas;