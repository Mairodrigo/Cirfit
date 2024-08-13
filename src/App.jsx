import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route
					path="/categoria/:categoryName"
					element={<ItemListContainer />}
				/>
				{/* <Route path="/detalle/:id" element={<ItemDetailContainer />} /> */}
				<Route path="*" element={<h2>Creemos que hubo un error 404! </h2>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
