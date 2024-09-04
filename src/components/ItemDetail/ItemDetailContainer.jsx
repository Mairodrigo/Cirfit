import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"; 

const ItemDetailContainer = () => {
	const { id } = useParams(); 
	const [item, setItem] = useState(null); 

	useEffect(() => {
		const fetchItem = async () => {
			const response = await fetch(`/api/products/${id}`); 
			const data = await response.json();
			setItem(data); 
		};

		fetchItem();
	}, [id]);

	if (!item) {
		return <p>Cargando...</p>;
	}

	return (
		<div className="item-detail-container">
			<h2>{item.nombre}</h2>
			<img
				src={item.img}
				alt={item.nombre}
				className="item-detail-image"
			/>{" "}
			
			<p>{item.detalle}</p>
			<p>Precio: ${item.precio}</p>
		</div>
	);
};

export default ItemDetailContainer;
