import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";
import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
	const { producto } = props;
	const { id, nombre, detalle, precio, category, img } = producto;
	return (
		<div className="item-card-container">
			<div className="item-card">
				<img src={producto.img} alt={producto.nombre} className="item-img" />
				<h2 className="item-nombre">{producto.nombre}</h2>
				<p className="item-precio">${producto.precio}</p>
				<Link to={`/detalle/${id}`}>
					<Boton texto="Ver detalles"></Boton>
				</Link>
				<ItemCount />
			</div>
		</div>
	);
};

export default Item;
