import NavBar from "./Components/NavBar";
import Footer from "./Footer";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount"; 
import ItemDetailContainer from "./Components/ItemDetailContainer";

const App = () => {
	return (
		<>
		<NavBar/>
		<ItemListContainer/>
		<ItemDetailContainer/>
		<ItemCount stock="5"/>     
		<Footer/>
		</>
		)
	}

export default App;