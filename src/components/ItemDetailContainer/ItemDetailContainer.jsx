import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../services/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});
	const [error, setError] = useState(null);
	const [cargando, setCargando] = useState(true);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducto = async () => {
			try {
				const productoRef = doc(db, "productos", id);
				const res = await getDoc(productoRef);
				const data = res.data();
				const productoFormateado = { ...data, id: res.id };
				setProducto(productoFormateado);
			} catch (error) {
				setError(error);
			} finally {
				setCargando(false);
			}
		};
		fetchProducto();
	}, [id]);

	if (cargando) {
		return (
			<h2>
					Cargando...
		
			</h2>
		);
	}

	return (
		<>
			<div>
			</div>
			<div>
				<ItemDetail producto={producto} />
			</div>
		</>
	);
};

export default ItemDetailContainer;