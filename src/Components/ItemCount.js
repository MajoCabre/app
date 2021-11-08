import { useState } from "react";

const ItemCount = () => {

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

    return (
        <>
        <nav className="button">
        <button className="button" onClick={stockContador}>
            <span className="material-icons"> add_circle_outline </span>
        </button>

        <button className="button" onClick={restaContador}>
            <span className="material-icons">remove_circle_outline</span>        
        </button>
        </nav>

        <nav className="button">
            <p className="button">{stock}</p>
        </nav>

        </>
    )
}

export default ItemCount;