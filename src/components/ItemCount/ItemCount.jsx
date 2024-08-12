import React, { useEffect, useState } from "react";
import Boton from "../Boton";

const ItemCount = ({ id }) => {
	const [count, setCount] = useState(1);
	const [productos, setProductos] = useState(1);
	const [ordenados, setOrdenados] = useState(true);
	const sumar = () => {
		if (count < 10) setCount(count + 1);
	};
	const restar = () => {
		if (count > 1) setCount(count - 1);
	};

	const comprar = () => {
		console.log(`compraste ${count} unidades`);
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
