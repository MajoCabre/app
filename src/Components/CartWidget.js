import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { contexto } from "../CartContext";

const CartWidget = () => {

    const { cartList } = useContext(contexto);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        cartList.forEach(element => {
            total = total + element.stock;
        });

        setTotal(total);

    }, [cartList])

    return (
        <Link to="/cart" className="cart_widget">
            <img className="icono" src="carrito.png" alt="carrito" />
            {total > 0 && <div className="cart_widget_count">{total}</div>}
        </Link>
    )
}

export default CartWidget;