import ItemList from "./ItemList";
import {useState} from "react";

const ItemListContainer = () => {

    // se inicializa la variable con un array vacio, y se coloca la funcion Set parea luego modificar mi variable
    const [dataMock, setDataMock] = useState([]);

    // se crea una promesa que me con un array de objeto 
    const promise = new Promise((resolve)=>{
        const response = [
            {id:1, nombre:"Red Velvet", precio:"$800", img:"redvelvet.jpg"},
            {id:2, nombre:"Banana Cake", precio:"$600", img:"banana.jpg"},
            {id:3, nombre:"Carrot Cake", precio:"$700", img:"carrot.jpg"},
            {id:4, nombre:"Vanila Cake", precio:"$500", img:"vanila.jpg"}
        ];

        // se crea la funcion setTimeout para que luego de 2 segundos me dé mi array de objeto
        setTimeout(() => {
            resolve(response);
        }, 
        1000);
    });

    // la promesa le asigna el array de objeto a mi funcion de setDataMock
    promise
        .then((response)=>{
            setDataMock(response)
    })

    // retorno con ItemList la respuesta con la variable de dataMock
    return (
        <ItemList data = {dataMock}/>
    )
}

export default ItemListContainer;