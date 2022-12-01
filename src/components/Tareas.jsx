import Tarea from "./Tarea"

const Tareas = ({ tareas, onDelete, onToggle }) => {

    return (
        <>
            {tareas.map((tarea) => (
                <Tarea key={tarea.key} tarea={tarea} onDelete={onDelete} onToggle={onToggle} />))}
        </>
    )
}

export default Tareas