import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { contexto } from "../CartContext";
import { getDatabase } from '../firebase/index';
import FormularioCompra from "./FormularioCompra";

const Cart = () => {

    const { vaciarCarrito, borrarProducto, cartList } = useContext(contexto);
    const [total, setTotal] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [ordenCompra, setOrdenCompra] = useState(null);

    useEffect(() => {
        let total = 0;

        cartList.forEach(element => {
            const price = parseInt(element.precio);
            const totalByStock = element.stock * price;
            total = total + totalByStock;
        });

        setTotal(total);

        if (cartList.length) {
            setShowForm(true);
        } else {
            setShowForm(false);
        }

    }, [cartList])

    const borrar = (producto) => {
        borrarProducto(producto);
    }
    const vaciarHandler = () => {
        setShowForm(false);
        vaciarCarrito();
    }

    const cleanState = () => {
        vaciarHandler();
    }

    const onBuy = async (dataCompra) => {

        const data = {
            ...dataCompra,
            items: cartList.map((element) => { return { id: element.id, title: element.nombre, price: parseInt(element.precio) } }),
            total: total,
            date: new Date()
        }

        const baseDatos = getDatabase();

        const docRef = await addDoc(collection(baseDatos, "compras"), data);
        setOrdenCompra(docRef.id);
        cleanState();
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
                        <button className="button" onClick={vaciarHandler}>Vaciar mi carrito</button>
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

            {showForm && <FormularioCompra onClick={onBuy} />}
            {ordenCompra && <div className="factura" >
                <span className="titulo_item">Su compra ha sido exitosa, su numero de orden es:</span>
                <span className="productos orden-id">{ordenCompra}</span>
            </div>}
        </>
    )
}

export default Cart;