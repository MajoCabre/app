import React, {useEffect} from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase } from '../../firebase/index';
import { doc, getDoc } from "firebase/firestore";

const Item = () => {
    const { itemId, categoriaId } = useParams();
    const [cake, setCake] = useState([]);

    useEffect(async () => {
        try {
            const baseDatos = getDatabase();
            const docRef = doc(baseDatos, `/categorias/${categoriaId}/items`, itemId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setCake(docSnap.data());
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