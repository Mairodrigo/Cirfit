import React, { useContext, useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = ({ saludo, categoria }) => {
	const [productos, setProductos] = useState([]);
	const [cargando, setCargando] = useState(true);

	const { contexto, mostrarMensaje } = useContext(CartContext);
	const { categoryName } = useParams();

	// Combina la categoría de los parámetros y la categoría seleccionada
	const categoriaActual = categoryName || categoria;

	useEffect(() => {
		setCargando(true);
		console.log("Obteniendo productos de Firestore...");

		const productosRef = collection(db, "Productos");

		const obtenerProductos = async () => {
			try {
				let snapshot;
				if (categoriaActual) {
					console.log(`Filtrando productos por categoría: ${categoriaActual}`);
					const prodsPorCat = query(
						productosRef,
						where("category", "==", categoriaActual)
					);
					snapshot = await getDocs(prodsPorCat);
				} else {
					console.log("Obteniendo todos los productos");
					snapshot = await getDocs(productosRef);
				}

				const prods = snapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));

				console.log("Productos obtenidos: ", prods);
				setProductos(prods);
			} catch (error) {
				console.error("Error al obtener productos: ", error);
			} finally {
				setCargando(false);
			}
		};

		obtenerProductos();
	}, [categoriaActual]);

	if (cargando) {
		return <h2>Cargando productos...</h2>;
	}

	return (
		<div className="div-container">
			<h3 onClick={() => mostrarMensaje()}>{contexto}</h3>
			{productos.length === 0 ? (
				<h2>No hay productos disponibles</h2>
			) : (
				productos.map((el) => <Item key={el.id} producto={el} />)
			)}
		</div>
	);
};

export default ItemListContainer;