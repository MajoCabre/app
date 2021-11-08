import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <nav className="logo_nav">
            
            <Link to ="/">
            <img className="logo" src="logo.png" alt="logo"/>
            </Link>

            <Link to ="/car">
            <img className="icono" src="carrito.png" alt="carrito"/>
            </Link>
        </nav>
    )
}

export default CartWidget;