// import ItemDetail from "./ItemDetail";
// import {useState} from "react";

// const ItemDetailContainer = () => {

//     // se inicializa la variable con un array vacio, y se coloca la funcion Set para luego modificar mi variable
//     const [detail, setDetail] = useState([]);

//     // se crea una promesa con un array de objeto 
//     const promise = new Promise((resolve)=>{
//         const detalle = [
//             {id:1, nombre:"Vainilla Cake", precio:"$400", tipo:"Cremosa", img:"vanila.jpg", descripcion:"Deliciosa, esponjosa y casera torta de vainilla, es una excelente opción a la hora de merendar..."}
//         ];

//         // se crea la funcion setTimeout para que luego de 2 segundos me dé mi array de objeto
//         setTimeout(() => {
//             resolve(detalle);
//         }, 
//         2000);
//     });

//     // la promesa le asigna el array de objeto a mi funcion de setDetail
//     promise
//         .then((detalle)=>{
//             setDetail(detalle)
//     })

//     // retorno con ItemDetail la respuesta con la variable de detail
//     return (
//         <ItemDetail detalle = {detail}/>
//     )
// }

// export default ItemDetailContainer;