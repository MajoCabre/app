import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { contexto } from "../CartContext";
import { getDatabase } from '../firebase/index';

const Cart = () => {

    const { vaciarCarrito, borrarProducto, cartList } = useContext(contexto);
    const [total, setTotal] = useState(0);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

    const nameChange = (event) => {
        setName(event?.target?.value);
    }
    const phoneChange = (event) => {
        setPhone(event?.target?.value);
    }
    const emailChange = (event) => {
        setEmail(event?.target?.value);
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const dataCompra = {
            buyer: {
                name,
                phone,
                email,
            },
            items: cartList.map((element) => { return { id: element.id, title: element.nombre, price: parseInt(element.precio) } }),
            total: total,
            date: new Date()

        }
        console.log('Compraaa %o', dataCompra);

        const baseDatos = getDatabase();

        const docRef = await addDoc(collection(baseDatos, "compras"), dataCompra);
        alert(`Su compra ha sido exitosa, su numero de orden es ${docRef.id}`);
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

            <form className="user_form">
                <label>
                    <span className="productos">Nombre:</span>
                    <input type="text" name="name" value={name} onChange={nameChange} />
                </label>
                <label>
                    <span className="productos">Telefono:</span>
                    <input type="text" name="phone" value={phone} onChange={phoneChange} />
                </label>
                <label>
                    <span className="productos">Email:</span>
                    <input type="text" name="email" value={email} onChange={emailChange} />
                </label>

                <div className="contenedor">
                    <button className="button confirm_button" onClick={handlerSubmit}>Comprar</button>
                </div>
            </form>
        </>
    )
}

export default Cart
