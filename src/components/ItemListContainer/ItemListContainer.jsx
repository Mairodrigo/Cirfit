import React, { useState, useEffect } from "react";
import { getProductos } from "../asyncMock";
import Item from "./Item";

const ItemListContainer = ({ categoria }) => {
	const [productos, setProductos] = useState([]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		getProductos()
			.then((res) => setProductos(res))
			.catch()
			.finally(() => setCargando(false));
	}, []);

	if (cargando) {
		return <h3>Cargando la tienda</h3>;
	}

	return (
		<div className="item-list-container">
			<h2>
				{categoria
					? `Productos en la categoría: ${categoria}`
					: "Todos los productos"}
			</h2>
			<div className="item-list">
				{productos.map((producto) => (
					<Item key={producto.id} producto={producto} /> 
				))}
			</div>
		</div>
	);
};

export default ItemListContainer;
