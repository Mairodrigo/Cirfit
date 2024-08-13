import React from "react";
import ItemCount from "./ItemCount/ItemCount";

const Item = ({ producto }) => {
	return (
		<>
			<div>{producto.nombre}</div>;
            <ItemCount/>

		</>
	);
};

export default Item;
