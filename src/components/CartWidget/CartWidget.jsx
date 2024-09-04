import React, { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext.jsx";

const CartWidget = () => {
	const { cart } = useContext(CartContext);

const totalUnidades = (cart || []).reduce(
		(acc, item) => acc + (item.cantidad || 0),
		0
);

	return (
		<div className="cart-widget">
			🛒
			{totalUnidades > 0 && <span className="cart-count">{totalUnidades}</span>}
		</div>
	);
};

export default CartWidget;
