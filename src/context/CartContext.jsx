import React, { createContext, useState } from "react";

export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);


	const agregarCarrito = (producto) => {
		// Verifica si el producto ya está en el carrito
		const productoExistente = cart.find((item) => item.id === producto.id);
		if (productoExistente) {
			// Actualiza la cantidad del producto existente
			setCart(
				cart.map((item) =>
					item.id === producto.id
						? { ...item, cantidad: item.cantidad + producto.cantidad }
						: item
				)
			);
		} else {
			// Agrega el nuevo producto al carrito
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

	// Función para mostrar la cantidad total de productos en el carrito
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
