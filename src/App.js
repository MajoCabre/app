// import { createContext } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Footer";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetail from "./Components/category/ItemDetail";
import Item from "./Components/cake/Item";
import Cart from "./Components/Cart";
import { BrowserRouter ,Switch, Route } from "react-router-dom";
import { CustomProvider } from "./CartContext";


const App = () => {

	return (
		<BrowserRouter>
		<CustomProvider>
		<NavBar/>
			<Switch>
				<Route exact path="/">
					<ItemListContainer/>
				</Route>

				<Route exact path="/categorias/:categoriaId">
					<ItemDetail/>
				</Route>

				<Route exact path="/categorias/:categoriaId/item/:itemId">
					<Item/>
				</Route>

				<Route exact path="/cart">
					<Cart/>
				</Route>

				<Route>
					<div>No se ha encontrado!</div>
				</Route>
				
			</Switch>
			<Footer/>
		</CustomProvider>
	</BrowserRouter>)
	}

export default App;