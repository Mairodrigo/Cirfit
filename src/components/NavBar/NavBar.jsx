import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/cirfitlogo.png"

const NavBar = () => {
	return (
		<nav>
			<h1>CirFit indumentaria y accesorios</h1>
            <img src={logo} alt="Logo Cirfit: rombo blanco fondo negro con letras blancas" className="imgLogo" />

			{/* Lista de menú */}
			<ul>
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
