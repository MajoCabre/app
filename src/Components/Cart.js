import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { contexto } from "../CartContext";

const Cart = () => {

    const { vaciarCarrito, borrarProducto, cartList } = useContext(contexto);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;

        cartList.forEach(element => {
            const price = parseInt(element.precio);
            const totalByStock = element.stock * price;
            total = total + totalByStock;
        });

        setTotal(total);

    }, [cartList])

    const borrar = (producto) => {
        borrarProducto(producto);
    }

    return (
        <>
            <div>
                {
                    cartList.length > 0 &&
                    <div className="titulo_item">
                        Esta es su seleccion de productos!!!
                    </div>
                }
            </div>

            <div>
                {cartList.length > 0 && cartList.map((producto) => {
                    return (
                        <>
                            <div className="contenedor">
                                <div className="productos">{producto.stock} unidades de {producto.nombre}</div>
                                <button className="button" onClick={() => borrar(producto)}>Eliminar del carrito</button>
                            </div>
                        </>
                    )
                })}
            </div>

            <div>
                {cartList.length > 0 &&
                    <div className="titulo_item">El total de su compra es de {total}</div>
                }
            </div>
            <div>
                {cartList.length === 0 && <div className="titulo_item">Su carrito esta vacio</div>}
            </div>

            <div>
                {
                    cartList.length > 0 &&
                    <div className="contenedor">
                        <button className="button" onClick={vaciarCarrito}>Vaciar mi carrito</button>
                    </div>
                }
            </div>
            <div>
                {
                    cartList.length === 0 &&
                    <Link to="/" className="contenedor">
                        <button className="button">Ir a la pagina principal</button>
                    </Link>
                }
            </div>
        </>
    )
}

export default Cart
