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
	{
		id: 5,
		nombre: "Calza larga SUSANAG",
		precio: 8000,
		categoria: "Calzas",
	},
	{
		id: 6,
		nombre: "Calza larga lisa",
		precio: 7000,
		categoria: "Calzas",
	},
	{
		id: 7,
		nombre: "Calza capri lisa",
		precio: 7000,
		categoria: "Calzas",
	},
	{
		id: 8,
		nombre: "Calza larga NEWOD",
		precio: 9000,
		categoria: "Calzas",
	},
	{
		id: 9,
		nombre: "Polleshort CUADRA",
		precio: 9000,
		categoria: "PolleShort",
	},
	{
		id: 10,
		nombre: "Polleshort SALPICA",
		precio: 9000,
		categoria: "PolleShort",
	},
	{
		id: 11,
		nombre: "Polleshort VACA",
		precio: 9000,
		categoria: "PolleShort",
	},
	{
		id: 12,
		nombre: "Musculosa lisa",
		precio: 9000,
		categoria: "Musculosas",
	},
	{
		id: 13,
		nombre: "Musculosa nadador",
		precio: 9000,
		categoria: "Musculosas",
	},
	{
		id: 14,
		nombre: "Mochila Quechua",
		precio: 19000,
		categoria: "Accesorios",
	},
];

export const getProductos = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productos);
		}, 2000);
	});
};
