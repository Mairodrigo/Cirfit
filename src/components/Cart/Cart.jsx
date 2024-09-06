import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
	const { contexto, cart, vaciarCarrito } = useContext(CartContext);

	return (
		<div>
			{cart?.map((e) => {
				return <CartItem key={e.id} producto={e} />;
			})}
			{cart.length > 0 ? (
				<>
					<button onClick={vaciarCarrito}>vaciar carrito</button>
					<Link to="/checkout">
						<button>Terminar Compra</button>
					</Link>
				</>
			) : (
				<Link to="/">
					<h3>No hay productos en el carrito</h3>
				</Link>
			)}
		</div>
	);
};
export default Cart;
