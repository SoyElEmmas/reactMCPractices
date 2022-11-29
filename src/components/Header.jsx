import Button from "./Button"
// const Header = (props) => { antes de des-estructurar
const Header = ({ titulo }) => {

    const saludo = () => {
        console.log('hola');
    }

    const despedida = () =>{
        console.log('adios')
    }

    return (
        <header className="header">
            <h1>{titulo}</h1>
            <Button texto='Agregar' color='green' param={saludo} />
            <Button texto='Borrar' color='red' param={despedida}/>
        </header>
    )
}

export default Header