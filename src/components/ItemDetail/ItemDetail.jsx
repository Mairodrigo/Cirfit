import React, { useContext } from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
	const { agregarAlCarrito } = useContext(CartContext);
	const [loading, setLoading] = React.useState(false);

	const handleComprar = (count) => {
		if (producto) {
			agregarAlCarrito({ ...producto, quantity: count });
		}
	};

	if (!producto) {
		return <div>No se encontró el producto</div>;
	}

	const { img, nombre, detalle, precio } = producto;

	return (
		<div className="itemdetail-container">
			<div className="itemdetail-card">
				<img className="itemdetail-img" src={img} alt={nombre} />
				<div className="itemdetail-precio">${precio}</div>
			<div className="itemdetail-card">
					<h2 className="itemdetail-nombre">{nombre}</h2>
					<p className="itemdetail-detalle">{detalle}</p>
					<ItemCount id={producto.id} handleComprar={handleComprar} />
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
