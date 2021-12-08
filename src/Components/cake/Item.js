import React, {useEffect} from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase } from '../../firebase/index';
import { doc, getDoc } from "firebase/firestore";

const Item = ({ img, precio, categoria }) => {
    const { itemId, categoriaId } = useParams();
    const [cake, setCake] = useState([]);

    useEffect(async () => {
        try {
            const baseDatos = getDatabase();
            const docRef = doc(baseDatos, `/categorias/${categoriaId}/items`, itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setCake(docSnap.data());
            } else {
                console.log("No se encontro el documento!");
            }
        } catch (e) {
            console.error("Error: ", e);
        }

    }, [])

    return (
        <>
            <nav className="container">
                <h1 className="titulo_item">{cake.nombre} {cake.precio}</h1>
                <div>
                <img className="imagen_tortas" src={`../../../${cake.img}`} alt="tortasddd"/> 
                </div>
            </nav>
        </>
    )
}

export default Item;