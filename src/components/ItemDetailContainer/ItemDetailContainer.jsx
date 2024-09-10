import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState(null);
	const [error, setError] = useState(null);
	const [cargando, setCargando] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchProducto = async () => {
			try {
				const productoRef = doc(db, "Productos", id);
				const res = await getDoc(productoRef);
				if (res.exists()) {
					const data = res.data();
					const productoFormateado = { ...data, id: res.id };
					setProducto(productoFormateado);
				} else {
					console.log("No se encontró el producto");
				}
			} catch (error) {
				setError(error);
			} finally {
				setCargando(false);
			}
		};
		fetchProducto();
	}, [id]);

	if (cargando) {
		return <h2>Cargando...</h2>;
	}

	if (error) {
		return <h2>Error al obtener el producto</h2>;
	}

	return (
		<div>
			<ItemDetail producto={producto} />
		</div>
	);
};

export default ItemDetailContainer;
