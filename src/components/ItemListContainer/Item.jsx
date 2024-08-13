import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ producto }) => {
	return (
		<>
			<div className="item">
				<h2 className="item-nombre">{producto.nombre}</h2>
				<p className="item-precio">${producto.precio}</p>
			</div>

			<ItemCount />
		</>
	);
};

export default Item;
