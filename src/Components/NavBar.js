import Links from "../Links";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<header>
			<CartWidget/>
			<Links/>
		</header> 
	)
}

export default NavBar;