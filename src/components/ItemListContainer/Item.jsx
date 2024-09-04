import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
	const { id, nombre, detalle, precio, categoria, img } = producto;
	return (
		<div className="item-card-container">
			<div className="item-card">
				<img src={producto.img} alt={producto.nombre} className="item-img" />
				<h2 className="item-nombre">{producto.nombre}</h2>
				<p className="item-precio">${producto.precio}</p>
				<Link to={`/detalle/${id}`}>
					Ver detalles
				</Link>
				<ItemCount />
			</div>
		</div>
	);
};

export default Item;
