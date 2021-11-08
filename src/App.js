import NavBar from "./Components/NavBar";
import Footer from "./Footer";
import ItemListContainer from "./Components/ItemListContainer";
import CategoryDetail from "./Components/category/CategoryDetail";
import Cake from "./Components/cake/Cake";

import { BrowserRouter ,Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
		<div>
		<NavBar/>
			<Switch>
				<Route exact path="/">
					<ItemListContainer/>
				</Route>

				<Route exact path="/categorias/:categoriaId">
					<CategoryDetail/>
				</Route>

				<Route exact path="/categorias/:categoriaId/item/:itemId">
					<Cake/>
				</Route>

				<Route>
					<div>No se ha encontrado!</div>
				</Route> */}
				
			</Switch>
			<Footer/>
		</div>
	</BrowserRouter>)
	}

export default App;