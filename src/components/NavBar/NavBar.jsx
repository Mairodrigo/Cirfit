import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/cirfitLogo.png";
import CategorySelector from "../CategorySelector/CategorySelector";

const NavBar = ({ onCambiarCategoria }) => {
	return (
		<nav>
			<div className="encabezado-container">
				<img
					src={logo}
					alt="Logo Cirfit: rombo blanco fondo negro con letras blancas"
					className="imgLogo"
				/>
				<h1>CirFit indumentaria y accesorios</h1>
			</div>

			{/* Lista de menú */}
			<ul className="menu-container">
				<li>
					<Link to="/" className="menu-item">
						Inicio
					</Link>
				</li>
				<li>
					<Link to="./nosotros" className="menu-item">
						Nosotros
					</Link>
				</li>
				<li>
					<Link to="./contacto" className="menu-item">
						Contacto
					</Link>
				</li>
				<li>
					<CategorySelector onCambiarCategoria={onCambiarCategoria} />
				</li>
			</ul>
			<CartWidget />
		</nav>
	);
};

export default NavBar;
