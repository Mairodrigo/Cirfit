import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/cirfitLogo.png";
import { db } from "../../services/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./NavBar.css";

const NavBar = () => {
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		const fetchCategorias = async () => {
			const categoriasCollection = collection(db, "Productos");
			const categoriasSnapshot = await getDocs(categoriasCollection);
			const categoriasList = categoriasSnapshot.docs.map(
				(doc) => doc.data().category
			);
			setCategorias([...new Set(categoriasList)]);
		};

		fetchCategorias();
	}, []);

	return (
		<nav>
			<div className="encabezado-container">
				<img
					src={logo}
					alt="Logo Cirfit: rombo blanco fondo negro con letras blancas"
					className="img-Logo"
				/>
				<h1>CirFit indumentaria y accesorios</h1>
			</div>

			<ul className="menu-container">
				<li>
					<Link to="/productos" className="menu-item">
						Todos los Productos
					</Link>
				</li>
				{categorias.map((categoria, index) => (
					<li key={index}>
						<Link
							to={`/category/${categoria}`}
							className="menu-item"
							onClick={() => onCambiarCategoria(categoria)} // Mueve onClick aquí
						>
							{categoria}
						</Link>
					</li>
				))}
			</ul>
			<CartWidget />
		</nav>
	);
};

export default NavBar;
