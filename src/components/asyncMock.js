const productos = [
	{
		id: 1,
		nombre: "Pollera pantalon Caspi",
		detalle:
			"Pollera con pantalon incorporado tipo calza corta. Material elastico, 86.5% poliéster y 13.5% lycra",
		precio: 35000,
		categoria: "Polleras",
		img: "./src/assets/img-products/polleraPCaspi01.png",
	},
	{
		id: 2,
		nombre: "Pollera pantalon Vaquirosa",
		detalle:
			"Pollera con pantalon incorporado tipo calza corta. Material elastico, 86.5% poliéster y 13.5% lycra",
		precio: 35000,
		categoria: "Polleras",
		img: "./src/assets/img-products/polleraPPink01.png",
	},
	{
		id: 3,
		nombre: "Pollera pantalon Rosa",
		detalle:
			"Pollera con pantalon incorporado tipo calza corta. Material elastico, 86.5% poliéster y 13.5% lycra",
		precio: 35000,
		categoria: "Polleras",
		img: "./src/assets/img-products/polleraPRosa01.png",
	},
	{
		id: 4,
		nombre: "Tripack de medias con caña",
		detalle:
			"Paquete con 3 unidades de medias surtidas de color blanco, gris y negro. Caña alta. 50% algodon 50%toalla",
		precio: 13500,
		categoria: "Accesorios",
		img: "./src/assets/img-products/tripackCCSurtido01.png",
	},

	{
		id: 5,
		nombre: "Tripack de medias sin caña",
		detalle:
			"Paquete con 3 unidades de medias tipo soquetes, surtidas de color blanco, gris y negro. 50% algodon 50%toalla",
		precio: 12000,
		categoria: "Accesorios",
		img: "./src/assets/img-products/tripackSCSurtido01.png",
	},
	{
		id: 6,
		nombre: "Calza termica negra",
		detalle: "Calza termica 100% algodon forrada con polar",
		precio: 58000,
		categoria: "Calzas",
		img: "./src/assets/img-products/calzaLLNegra01.png",
	},
	{
		id: 7,
		nombre: "Calza larga Arte",
		detalle: "Calza deportiva larga, 88% poliester, 10% lycra, 2% algodon",
		precio: 43600,
		categoria: "Calzas",
		img: "./src/assets/img-products/calzaLArte01.png",
	},
	{
		id: 8,
		nombre: "Calza larga Glitter",
		detalle: "Calza larga con glitter, 75% poliester, 10% lycra, 15% algodon",
		precio: 48000,
		categoria: "Calzas",
		img: "./src/assets/img-products/calzaLGlitter01.png",
	},
	{
		id: 9,
		nombre: "Calza larga Hojas",
		detalle: "Calza larga deportiva, 88% poliester, 10% lycra, 2% algodon",
		precio: 43600,
		categoria: "Calzas",
		img: "./src/assets/img-products/calzaLHojas01.png",
	},
	{
		id: 10,
		nombre: "Musculosa Fit",
		detalle: "Musculosa al cuerpo, talle unico, 75% poliester, 25% lycra",
		precio: 38000,
		categoria: "Remeras",
		img: "./src/assets/img-products/muscuFit01.png",
	},
];

export const getProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve(productos);
			} catch (error) {
				reject(error);
			}
		}, 1000);
	});
};

