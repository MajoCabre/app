import NavBar from "./Components/NavBar";
import Footer from "./Footer";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";

const App = () => {
	return (
		<>
		<NavBar/>
		<ItemListContainer greeting="mundo"/>
		<ItemCount stock="5"/>     
		<Footer/>
		</>
		)
	}

export default App;