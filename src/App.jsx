import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Tareas from "./components/Tareas";

const initialStateTareas = JSON.parse(localStorage.getItem("tareas")) || [];


const App = () => {

  const [tareas,setTareas] = useState(initialStateTareas);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  },[tareas])

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  };

  const eliminarTarea = (id) => {
    const nuevoArreglo = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevoArreglo);
  };

  const actualizarTarea = (id) => {
    const nuevoArreglo = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.state = !tarea.state;
      }
      return tarea;
    })
    setTareas(nuevoArreglo);
  };

  const ordenarTareas = (tareas) => {
    return tareas.sort((a,b)=>{
      if(a.priority === b.priority) return 0;
      if(a.priority) return -1;
      if(!a.priority) return 1;
    })
  }

  return (
    <>
    <h1>Todo App con React</h1>
      <Formulario addTarea={agregarTarea}/>
      <Tareas tareas={ordenarTareas(tareas)} deleteTarea={eliminarTarea} updateTarea={actualizarTarea}/>
    </>
  );
};
export default App;
