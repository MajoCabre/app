const ItemDetail = ({detalle}) => {
    return (
        <>
        <nav className="contenedor_listado">
            {detalle.map((element) => <ItemDetalle key={element.id} nombre={element.nombre} precio={element.precio} img={element.img} descripcion={element.descripcion}/>)}
        </nav> 
        </>
    )
}

const ItemDetalle = ({nombre, precio, img, descripcion}) => {
    return  (
        <>
            <nav className = "contenedor">
                <img className="imagen_tortas" src={img}/>
                <div className="listado_texto" key={nombre}>{nombre} {precio} </div>
                <div className="listado_texto" key={nombre}>{descripcion}</div>
            </nav>    
        </>
    )
}

    
export default ItemDetail;