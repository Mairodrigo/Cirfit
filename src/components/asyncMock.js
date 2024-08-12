const productos = [
	{
		id: 1,
		nombre: "Tripack sin caña",
		precio: 5000,
		categoria: "Medias",
	},
	{
		id: 2,
		nombre: "Tripack con caña",
		precio: 5000,
		categoria: "Medias",
	},
	{
		id: 3,
		nombre: "Calza larga OTOÑO",
		precio: 8000,
		categoria: "Calzas",
	},
	{
		id: 4,
		nombre: "Calza larga ARTE",
		precio: 8000,
		categoria: "Calzas",
	},
];

export const getProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productos);
		}, 3000);
	});
};
