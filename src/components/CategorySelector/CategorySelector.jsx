import React, { useState, useEffect } from "react";
import { getProductos } from "../asyncMock";

const CategorySelector = ({ onCambiarCategoria }) => {
	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		getProductos().then((productos) => {
			const categoriasUnicas = [
				...new Set(productos.map((producto) => producto.categoria)),
			];
			setCategorias(categoriasUnicas);
		});
	}, []);

	return (
		<select
			onChange={(e) => onCambiarCategoria(e.target.value)}
			defaultValue="">
			<option value="">Todas las categorías</option>
			{categorias.map((categoria) => (
				<option key={categoria} value={categoria}>
					{categoria}
				</option>
			))}
		</select>
	);
};

export default CategorySelector;
