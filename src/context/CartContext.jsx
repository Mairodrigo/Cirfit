import React, { createContext, useState } from "react";

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);


	const agregarCarrito = (producto) => {

		const productoExistente = cart.find((item) => item.id === producto.id);
		if (productoExistente) {

			setCart(
				cart.map((item) =>
					item.id === producto.id
						? { ...item, cantidad: (item.cantidad ||0) + (producto.cantidad ||1) }
						: item
				)
			);
		} else {
			setCart([...cart, { ...producto, cantidad: producto.cantidad || 1 }]);
		}
	};
	const vaciarCarrito = () => {
		setCart([]);
	};

	const eliminarProducto = (id) => {
		const newCart = cart.filter((e) => e.id !== id);
		setCart(newCart);
	};

	const mostrarCantidad = () => {
		return cart.reduce((acc, curr) => acc + (curr.cantidad || 0), 0);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				agregarCarrito,
				vaciarCarrito,
				eliminarProducto,
				mostrarCantidad,
			}}>
			{children}
		</CartContext.Provider>
	);
};
