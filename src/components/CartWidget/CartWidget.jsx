import React, { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { mostrarCantidad } = useContext(CartContext);

	return (
		<div className="cart-widget">
			🛒
			<span className="cart-count">{mostrarCantidad()}</span>
		</div>
	);
};

export default CartWidget;
