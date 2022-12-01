import Header from './components/Header'
import Tareas from './components/Tareas'
import AddTarea from './components/AddTarea'
import { useState } from "react"

function App() {

  const[mostrarForm, setmostrarForm] = useState(false)

  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: 'Ir al cine',
      fecha: '29 de noviembre de 2022',
      terminada: true
    },
    {
      id: 2,
      texto: 'Ir por taquitos al pastor',
      fecha: '30 de noviembre de 2022',
      terminada: false
    },
    {
      id: 3,
      texto: 'Ir al super',
      fecha: '01 de diciembre de 2022',
      terminada: false
    }
  ])

  //borrar una tarea
  const borrarTarea = (id) =>{
    //para debug
    console.log(id);
    //filtrado de tareas
    setTareas(tareas.filter((tarea=>tarea.id!==id)))
  }

  //cambiar el estatus de la tareas
  const marcarTarea = (id) =>{
    //para debug
    console.log(id);
    setTareas(tareas.map((tarea)=> tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))
  }

  //agregar una tarea
  const agregarTarea = (tarea) =>{ //tarea recibida
    //console.log('tareabbb');
    const id = Math.floor(Math.random()*1000) +1
    const nuevaTarea = {id, ...tarea} //copia de la tarea recibida
    setTareas([...tareas, nuevaTarea]) //se crea una copia del array y se agrega la nueva tarea
  }

  return (
    <div className="container">
      <Header titulo='Tareas' mostrarForm={mostrarForm} onAdd={()=> setmostrarForm(!mostrarForm)}/>
      {/* operador ternario pero solo con true: && */}
      {mostrarForm && <AddTarea onAdd={agregarTarea}/>} 
      {tareas.length>0 ? <Tareas tareas={tareas} onDelete={borrarTarea} onToggle={marcarTarea}/> : 'No hay tareas que mostrar'}
    </div>
  )
}

export default App
