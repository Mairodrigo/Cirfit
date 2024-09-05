import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ producto }) => {
	const { eliminarProducto } = useContext(CartContext);

	return (
		<Card>
			<Card.Img src={producto.image} />
			<Card.Header>Cantidad: {producto.quantity}</Card.Header>
			<Card.Body>
				<Card.Title> {producto.title} </Card.Title>
				<Card.Text></Card.Text>
				<Button
					variant="secondary"
					size="sm"
					onClick={() => eliminarProducto(producto.id)}>
					Eliminar del carrito
				</Button>
			</Card.Body>
			<ListGroup variant="flush">
				<ListGroup.Item>
					Cantidad total: {producto.quantity} (x {producto.sale} c/u)
				</ListGroup.Item>
				<ListGroup.Item>Precio por unidad: ${producto.price}</ListGroup.Item>
				<ListGroup.Item>
					Precio TOTAL: ${producto.quantity * producto.price}
				</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

export default CartItem;
