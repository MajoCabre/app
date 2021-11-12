import { useState } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "./category/ItemDetail";
import Cart from "./Cart";

const ItemCount = ({item, onAdd}) => {

    const [stock, setContador] = useState(0)

    const stockContador = () =>{

        if (stock< 5){
            setContador(stock +1)
        }
    }

    const restaContador = () => {

        if(stock > 0){
            setContador(stock -1)
        } 
    }

    const agregarCarrito = () => {
        let newItem = {...item};
        newItem.stock = stock;
        onAdd(newItem)
    }

    const redirect = "/cart";

    return (
        <>
            <nav className="contenedor">
                <button className="button" onClick={restaContador}>
                    <span className="material-icons">remove_circle_outline</span>        
                </button>
                <button className="button" onClick={stockContador}>
                    <span className="material-icons"> add_circle_outline </span>
                </button>
            </nav>

                <p className="contenedor">{stock}</p>

            <nav className="contenedor">
                <button onClick={agregarCarrito} className="button">
                    Agregar al carrito
                </button>

                <Link className="titulo_categoria" to ={redirect}>
                    <button className="button">Confirmar mi compra: </button>
                </Link>
            </nav>
        </>
    )
}

export default ItemCount;