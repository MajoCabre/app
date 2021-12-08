import { createContext , useState } from "react";
export const contexto = createContext();
export const { Provider } = contexto;

export const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const agregarProducto = (producto)=> {
        if(!isInCart(producto)){
            const newCart = [...cart];
            newCart.push(producto);
            setCart(newCart);
        } else {
            const newCartFiltered = cart.filter((element)=>element.id !== producto.id);
            newCartFiltered.push(producto);
            setCart(newCartFiltered);
        }
    }

    const borrarProducto = (producto)=> {
        const newCartFiltered = cart.filter((element)=>element.id !== producto.id);
        setCart(newCartFiltered);
    }

    const vaciarCarrito = ()=> {
        setCart([]);
    }

    const isInCart = (producto)=> {
        let ret = false;

        cart
        .forEach(element => {
            if(element.id == producto.id){
                ret = true;
            }
        });

        return cart.length > 0 && ret;
    }

    const valor_de_contexto = { 
        cartList : cart , 
        agregarProducto : agregarProducto , 
        borrarProducto : borrarProducto , 
        vaciarCarrito : vaciarCarrito 
    }

    return (
        <Provider value={valor_de_contexto}>
            {children}
        </Provider>
    )
}