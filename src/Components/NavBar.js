import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

	return (
		<header>
			<nav className="logo_nav">

				<Link to="/">
					<img className="logo" src="logo.png" alt="logo" />
				</Link>

				<CartWidget />
			</nav>
		</header>
	)
}

export default NavBar;