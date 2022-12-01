import React, { useState } from "react"
const AddTarea = ({ onAdd }) => {

    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!texto) {
            alert("Debes teclear una descripción")
            return
        }
        if (!fecha) {
            alert("Debes teclear una fecha")
            return
        }

        //se desestructura el objeto recibido
        onAdd({texto, fecha, terminada})

        //se limpia formulario
        setTexto("")
        setFecha("")
        setTerminada(false)


    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Tarea:</label>
                <input
                    type="text"
                    placeholder="Teclea una descripción"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Fecha:</label>
                <input
                    type="text"
                    placeholder="Teclea una Fecha"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Terminada:</label>
                <input type="checkbox"
                    checked={terminada}
                    value={terminada}
                    onChange={(e) => setTerminada(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Guardar" className="btn btn-block" />
        </form>
    )
}

export default AddTarea