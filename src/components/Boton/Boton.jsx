import { useState } from "react";
import "./Boton.css";

const Boton = ({ texto, fn }) => {
	const handleClick = () => {
		if (typeof fn === "function") {
			fn();
		} else {
			console.error("Error: fn no es una función.");
		}
	};

	return (
		<button className="btn" onClick={handleClick}>
			{texto}
		</button>
	);
};

export default Boton;
