import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				{/* 			<Route path="/" element={<Inicio />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route path="/contacto" element={<Contacto />} /> */}
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:category" element={<ItemListContainer />} />
				<Route path="/product/:id" element={<ItemDetailContainer />} />
				<Route path="*" element={<h2>Creemos que hubo un error 404! </h2>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
