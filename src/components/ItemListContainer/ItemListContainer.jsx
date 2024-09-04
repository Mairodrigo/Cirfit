import React, { useState, useEffect } from "react";
import { getProductos } from "../asyncMock";
import Item from "./Item";

const ItemListContainer = ({ categoria }) => {
	const [productos, setProductos] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setCargando(true);
		setError(null);
		getProductos()
			.then((res) => {
				const productosFiltrados = categoria
					? res.filter((producto) => producto.categoria === categoria)
					: res;
				setProductos(productosFiltrados);
			})
			.catch((error) => console.error("Error al cargar productos:", error))
			.finally(() => setCargando(false));
	}, [categoria]);

	if (cargando) {
		return <h3>Cargando la tienda...</h3>;
	}

	const productosFiltrados = categoria
		? productos.filter((producto) => producto.categoria === categoria)
		: productos;

	if (productosFiltrados.length === 0) {
		return <h3>No hay productos disponibles en esta categoría</h3>;
	}

	return (
		<div className="item-list-container">
			<h2>
				{categoria
					? `Productos en la categoría: ${categoria}`
					: "Todos los productos"}
			</h2>
			<div className="item-list">
				{productosFiltrados.map((producto) => (
					<Item key={producto.id} producto={producto} />
				))}
			</div>
		</div>
	);
};

export default ItemListContainer;
