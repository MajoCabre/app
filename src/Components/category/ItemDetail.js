import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { contexto } from "../../CartContext";
import { getDatabase } from '../../firebase/index';
import { collection, getDocs } from "firebase/firestore";

const ItemDetail = () => {

    const { categoriaId } = useParams();
    const [dataMock, setDataMock] = useState([]);
    const { agregarProducto } = useContext(contexto);

    useEffect(async () => {
        try {
            const baseDatos = getDatabase();
            const querySnapshot = await getDocs(collection(baseDatos, `/categorias/${categoriaId}/items`));
            const response = [];

            querySnapshot
                .forEach((doc) => {
                    response.push({ ...doc.data(), id: doc.id });
                });
            console.log("Reponse: ", response);
            setDataMock(response);
        } catch (e) {
            console.error("Error: ", e);
        }

    }, [])

    const onAdd = (itemToAdd) => {
        agregarProducto(itemToAdd);
    }

    return (
        <>
            <nav>
                <h1 className="titulo_item">{categoriaId}</h1>
                {dataMock
                    .map((item) => {
                        const redirect = `/categorias/${categoriaId}/item/${item.id}`;
                        return (
                            <nav key={item.nombre}>
                                <div className="contenedor" >
                                    <Link className="titulo_categoria" to={redirect}>
                                        <h1 >{item.nombre}</h1>
                                        <img className="imagen_tortas" src={`../${item.img}`} alt="tortas" />
                                    </Link>
                                </div>
                                <ItemCount item={item} onAdd={onAdd} />
                            </nav>)
                    }
                    )}
            </nav>
        </>
    )
}

export default ItemDetail;