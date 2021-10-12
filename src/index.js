// 1 tiene que estar la variable react en scope
import React from "react"

// 2 tiene que estar la variable reactDdom en scope
import ReactDOM from "react-dom"

// 3 tengo que tener un elemento
const Elemento = () => <p> Hola Mundo </p>

// 4 tengo que renderizar el elemento
ReactDOM.render( <Elemento/>, document.getElementById("root"))

//para ver si sirve uso en la terminal nmp run start