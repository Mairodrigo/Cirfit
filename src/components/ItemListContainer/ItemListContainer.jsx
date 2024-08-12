import React, { useState, useEffect } from "react";
import { getProductos } from "../asyncMock";
import Item from "../Item";

const ItemListContainer = ({ bienvenida }) => {
	const [productos, setProductos] = useState([]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		getProductos()
			.then((res) => setProductos(res))
			.catch()
			.finally(() => setCargando(false));
	}, []);

	console.log(productos);

	if (cargando) {
		return <h3>Cargando la tienda</h3>;
	}

	return (
		<div>
			{productos.map((el) => {
				return <Item key={el.id} producto={el}/>
			})}
		</div>
	);
}

export default ItemListContainer;
