const Tarea = ({tarea,deleteTarea,updateTarea}) => {

    const {title,description,state,priority,id} = tarea;

    const eliminar = () => {
        deleteTarea(id);
    };

    const actualizar = () => {
        updateTarea(id);
    };

    return (
        <>
            <li className="list-group-item list-group-item-dark">
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 className={`${state && "text-decoration-line-through"}`}>{title}</h5>
                        <p className={`${state && "text-decoration-line-through"}`}>{description}</p>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-danger" onClick={eliminar}>Eliminar</button>
                            <button className="btn btn-sm btn-warning" onClick={actualizar}>Actualizar</button>
                        </div>
                    </div>
                    <span className="badge text-bg-success">{priority && "Prioritario"}</span>
                </div>
            </li>
        </>
    )
}

export default Tarea;