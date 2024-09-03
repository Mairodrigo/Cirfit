import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
			<h2>{item.name}</h2>
			<img src={item.image} alt={item.name} className="item-detail-image" />
			<p>{item.description}</p>
			<p>Precio: ${item.price}</p>
			
		</div>
	);
};

export default ItemDetailContainer;
