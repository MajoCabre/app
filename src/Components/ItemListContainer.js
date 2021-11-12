import CategoryList from "./category/CategoryList";
import {useState} from "react";

const ItemListContainer = () => {

    const [dataMock, setDataMock] = useState([]);

    const promise = new Promise((resolve)=>{

        const response = [
            {
                categoria: 'frutales',
                img:'redvelvet.jpg',
                items:[
                    {id:1, nombre:"Naranja cake", precio:"$800", img:"../redvelvet.jpg"},
                    {id:2, nombre:"Banana Cake", precio:"$600", img:"../banana.jpg"},
                    {id:3, nombre:"Carrot Cake", precio:"$700", img:"../carrot.jpg"}
                ]
            },
            {
                categoria: 'cremosas',
                img:'redvelvet.jpg',
                items:[
                    {id:4, nombre:"Red Velvet", precio:"$800", img:"../redvelvet.jpg"},
                    {id:5, nombre:"Tiramisu Cake", precio:"$600", img:"../banana.jpg"},
                    {id:6, nombre:"Cheese Cake", precio:"$700", img:"../carrot.jpg"}
                ]
            },
            {
                categoria: 'humedas',
                img:'redvelvet.jpg',
                items:[
                    {id:7, nombre:"Tres leches", precio:"$800", img:"../redvelvet.jpg"},
                    {id:8, nombre:"Bienmesabe Cake", precio:"$600", img:"../banana.jpg"},
                    {id:9, nombre:"Superhumeda Cake", precio:"$700", img:"../carrot.jpg"}
                ]
            }
        ];

        setTimeout(() => {
            resolve(response);
            localStorage.setItem('dataMock', JSON.stringify(response));
        }, 
        1000);
    });

    promise
        .then((response)=>{
            setDataMock(response)
    })

    return (
        <CategoryList data = {dataMock}/>
    )
}

export default ItemListContainer;