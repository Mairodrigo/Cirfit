import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

	const manejarCambioCategoria = (categoria) => {
		setCategoriaSeleccionada(categoria);
	};

	return (
		// estado de carrito accesible desde toda mi app
		<CartContextProvider> 
			<BrowserRouter>
				<NavBar onCambiarCategoria={manejarCambioCategoria} />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer categoria={categoriaSeleccionada} />}
					/>
					<Route
						path="/category/:category"
						element={<ItemListContainer categoria={categoriaSeleccionada} />}
					/>
					<Route path="/product/:id" element={<ItemDetailContainer />} />
					<Route path="*" element={<h2>Creemos que hubo un error 404!</h2>} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
