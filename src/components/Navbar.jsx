import { Link } from "react-router-dom";
import ContactService from "../services/contactsService";


export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Lista de contactos</span>

				</Link>
				<div className="ml-auto">
					<Link to="/New_contact">
						<button className="btn btn-primary m-1">Crear contacto</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
	