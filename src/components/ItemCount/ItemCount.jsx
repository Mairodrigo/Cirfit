import { useState, useContext } from "react";
import Boton from "../Boton/Boton";
import "./ItemCount.css";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ id }) => {
	const { agregarCarrito } = useContext(CartContext);

	const [count, setCount] = useState(1);

	const sumar = () => {
		if (count < 5) setCount(count + 1);
	};

	const restar = () => {
		if (count > 1) setCount(count - 1);
	};

	const manejarAgregarCarrito = () => {
		agregarCarrito({ id, cantidad: count }); // Aquí estamos pasando un objeto
	};

	return (
		<div>
			<p className="producto-cantidad">Cantidad:</p>
			<Boton texto="-" fn={restar} />
			<span className="producto-cantidad">{count}</span>
			<Boton texto="+" fn={sumar} />
			<div>
				<Boton texto="Agregar a carrito" fn={manejarAgregarCarrito} />
			</div>
		</div>
	);
};

export default ItemCount;
