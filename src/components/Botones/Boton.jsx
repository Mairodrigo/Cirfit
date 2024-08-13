import { useState } from "react";
import "./Boton.css";

const Boton = ({ texto, fn }) => {
	return (
		<>
			<button className="btn" onClick={() => fn()}>
				{" "}
				{texto}{" "}
			</button>
		</>
	);
};

export default Boton;
