import { Link } from "react-router-dom";

const ItemDetailContainer = ({img, categoria}) => {
    const redirect = `/categorias/${categoria}`;

    return  (
        <>
        <nav className="contenedor">
        	<Link className="titulo_categoria" to ={redirect}>
                <h1 >{categoria}</h1>
                <nav>
                <img className="imagen_tortas" src={img} alt="tortas"/> 
                </nav>
			</Link>
        </nav>
        </>
    )
}

export default ItemDetailContainer;