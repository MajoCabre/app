import CategoryList from "./category/CategoryList";
import { useState, useEffect } from "react";
import { getDatabase } from '../firebase/index';
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {

    const [dataMock, setDataMock] = useState([]);

    useEffect(async () => {
        try {
            const baseDatos = getDatabase();
            const querySnapshot = await getDocs(collection(baseDatos, "categorias"));
            const response = [];

            querySnapshot
                .forEach((doc) => {
                    response.push(doc.data());
                });
                
            setDataMock(response);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }, [])

    return (
        <CategoryList data={dataMock} />
    )
}

export default ItemListContainer;