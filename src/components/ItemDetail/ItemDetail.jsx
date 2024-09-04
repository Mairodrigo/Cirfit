import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ product }) => {
	const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false); 
	const { agregarAlCarrito } = useContext(CartContext); 

	const onAdd = (cantidad) => {
		agregarAlCarrito(product, cantidad); 
		setAgregadoAlCarrito(true); 
	};

	return (
		<div>
			<h3>{product.nombre}</h3>
			<p>{product.detalle}</p>
			<p>Precio: ${product.precio}</p>
            
			{product.stock > 0 ? ( //Para el futuro, cuando haya manejo de stock
				!agregadoAlCarrito ? (
					<ItemCount stock={product.stock} onAdd={onAdd} />
				) : (
					<p>Producto añadido al carrito.</p> 
				)
			) : (
				<p>Producto sin stock.</p> // Mensaje de sin stock
			)}
		</div>
	);
};

export default ItemDetail;
