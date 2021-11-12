import React, { useContext } from 'react';
import { contexto } from "../CartContext";

const Cart = () => {

    const { vaciarCarrito, borrarProducto,  cartList } = useContext(contexto);

    const borrar =(producto)=> {
        borrarProducto(producto);
    }

    return (
        <>
        <div className="titulo_item">
            Esta es su seleccion de productos!!!
        </div>
        <div>
            {cartList.map((producto)=>{
                return (
                    <>
                    <div className="contenedor">
                        <div className="productos">{producto.stock} unidades de {producto.nombre}</div>
                        <button className="button" onClick={()=>borrar(producto)}>Eliminar del carrito</button>
                    </div>
                    </>
                )
            })}
        </div>
        <div className="contenedor">
            <button className="button" onClick={vaciarCarrito}>Vaciar mi carrito</button>
        </div>
        </>
    )
}

export default Cart
