import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/CheckOut/CheckOut";

function App() {
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

	const manejarCambioCategoria = (categoria) => {
		setCategoriaSeleccionada(categoria);
	};

	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar onCambiarCategoria={manejarCambioCategoria} />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer categoria={categoriaSeleccionada} />}
					/>
					<Route path="/productos" element={<ItemListContainer />} />
					<Route
						path="/category/:categoryName"
						element={<ItemListContainer categoria={categoriaSeleccionada} />}
					/>
					<Route path="/detalle/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/CheckOut" element={<Checkout />} />
					<Route path="*" element={<h2>Creemos que hubo un error 404!</h2>} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;