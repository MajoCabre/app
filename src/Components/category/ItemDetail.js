import React from 'react'
import { useState } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";


const ItemDetail = () => {

    const {categoriaId} = useParams();

        const [dataMock, setDataMock] = useState([]);

        const promise = new Promise((resolve)=>{
            let categoriaSeleccionada=[];

            const dataLocalStorage = localStorage.getItem('dataMock');
            const dataMock = JSON.parse(dataLocalStorage);

            categoriaSeleccionada = dataMock.filter((element)=>element.categoria === categoriaId)[0];
    
            setTimeout(() => {
                resolve(categoriaSeleccionada.items);
            }, 
            1000);
        });
    
        promise
            .then((response)=>{
                setDataMock(response)
        });

        const onAdd = function (stock) {
            // const agregarProducto = (stock)
            console.log(`agregar:` + stock)
    }

    return (
        <>
        <nav>
            <h1 className="titulo_item">{categoriaId}</h1>
            {dataMock
                .map((item) => 
                {
                    const redirect = `/categorias/${categoriaId}/item/${item.nombre}`;
                        return (
                            <nav>
                                <div className="contenedor" key={item.nombre}>
                                <Link className="titulo_categoria" to ={redirect}>
                                <h1 >{item.nombre}</h1>
                                <img className="imagen_tortas" src={item.img} alt="tortas"/> 
                                </Link>
                                </div>
                                <ItemCount onAdd={onAdd}/>

                            </nav>)
                    }
                )}
            </nav> 
        </>
    )
}

export default ItemDetail;