import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ producto }) => {
	return (
		<div className="item-card-container">
			<div className="item-card">
				<img src={producto.img} alt={producto.nombre} className="item-img" />
				<h2 className="item-nombre">{producto.nombre}</h2>
				<p className="item-precio">${producto.precio}</p>
			<ItemCount />
			</div>

		</div>
	);
};

export default Item;
