import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { contexto } from "../../CartContext";

const ItemDetail = () => {
    
    const {categoriaId} = useParams();
    const [dataMock, setDataMock] = useState([]);
    const {agregarProducto} = useContext(contexto);


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

        
        const onAdd = (itemToAdd) =>{
            agregarProducto(itemToAdd);
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
                            <ItemCount item={item} onAdd={onAdd}/>
                        </nav>)
                    }
                )}
            </nav> 
        </>
    )
}

export default ItemDetail;