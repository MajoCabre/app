import NavBar from "./Components/NavBar";
import Footer from "./Footer";
import ItemListContainer from "./Components/ItemListContainer";

const App = () => {
	return (
		<>
		<NavBar/>
		<ItemListContainer greeting="mundo"/>
		<Footer/>
		</>
		)
	}

export default App;