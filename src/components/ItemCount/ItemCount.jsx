import React, { useEffect, useState } from "react";
import Boton from "../Botones/Boton";
import "./ItemCount.css";
import { getProductos } from "../asyncMock";

const ItemCount = ({ id }) => {
	const [count, setCount] = useState(1);
	const [productos, setProductos] = useState(1);

	const sumar = () => {
		if (count < 5) setCount(count + 1);
	};
	const restar = () => {
		if (count > 1) setCount(count - 1);
	};

	const comprar = () => {
		const total = productos.precio * count;
		console.log(`Tu compra fue de ${count} unidades`);
	};

	return (
		<div className="container">
			<Boton texto="-" fn={restar} />
			<span className="producto-cantidad">{count}</span>
			<Boton texto="+" fn={sumar} />
			<Boton texto="Agregar al carrito" fn={comprar} />
		</div>
	);
};

export default ItemCount;
