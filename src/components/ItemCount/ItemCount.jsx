import React, { useEffect, useState } from "react";
import Boton from "../Botones/Boton";


const ItemCount = ({ id }) => {
	const [count, setCount] = useState(1);
	const [productos, setProductos] = useState(1);
	const [ordenados, setOrdenados] = useState(true);
	const sumar = () => {
		if (count < 5) setCount(count + 1);
	};
	const restar = () => {
		if (count > 1) setCount(count - 1);
	};

	const comprar = () => {
		const total = productos.precio * count;
		console.log(
			`Compraste ${count} unidades de ${
				productos.nombre
			}. Total $${total.toFixed(2)}`
		);
	};

	return (
		<div className="container">
			<Boton texto="-" fn={restar} />
			<span>{count}</span>
			<Boton texto="+" fn={sumar} />
			<Boton texto="Comprar" fn={comprar} />
		</div>
	);
};

export default ItemCount;
