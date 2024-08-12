import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/cirfitlogo.png";

const NavBar = () => {
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
					<a href="" className="menu-item">
						Inicio
					</a>
				</li>
				<li>
					<a href="" className="menu-item">
						Nosotros
					</a>
				</li>
				<li>
					<a href="" className="menu-item">
						Como comprar
					</a>
				</li>
				<li>
					<a href="" className="menu-item">
						Contacto
					</a>
				</li>
				<li>
					<CartWidget />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
