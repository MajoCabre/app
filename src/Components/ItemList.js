import Item from "./Item"

const ItemList = ({data}) => {
    return (
        <>
        <ul className="contenedor_listado">
            {data.map((elemento) => <Item key={elemento.id} nombre={elemento.nombre} precio={elemento.precio} img={elemento.img}/>)}
        </ul> 
        </>
    )
}

export default ItemList;