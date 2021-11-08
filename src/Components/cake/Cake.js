import React from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom'

const Cake = ({img, precio, categoria}) => {
    const {itemId, categoriaId} = useParams();

        const [cake, setCake] = useState([]);

        const promise = new Promise((resolve)=>{
            let response=[];

            const dataLocalStorage = localStorage.getItem('dataMock');
            const dataMock = JSON.parse(dataLocalStorage);

            const data= dataMock.filter((element)=>element.categoria === categoriaId)[0];
            const cake = data.items.filter((element)=>element.nombre === itemId)[0];
    
            setTimeout(() => {
                resolve(cake);
            }, 
            1000);
        });
    
        promise
            .then((response)=>{
                setCake(response)
        });

    return  (
        <>
            <nav className = "contenedor">
                <h1 className="titulo_item">{cake.nombre}</h1>
                <h1 className="titulo_item">{cake.precio}</h1> 
                <img className="imagen_tortas" src={`../../${cake.img}`} alt="tortas"/>
            </nav>
        </>
    )
}

export default Cake;