const Item = ({nombre, precio, img}) => {
    return  (
        <>
            <nav className = "contenedor">
                <img className="imagen_tortas" src={img}/>
                <li className="listado_texto" key={nombre}>{nombre} {precio}</li>
            </nav>    
        </>
    )
}

export default Item;