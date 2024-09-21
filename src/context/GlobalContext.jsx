import { createContext } from 'react';
export const GlobalContext = createContext();

const bbdd = {
	header: {
		menu: [
			{ title: 'Inicio', href: '/' },
			{ title: 'Servicios', href: '#' },
			{ title: 'Sobre EMENails', href: '/about' },
		],
		rrss: [
			{ title: 'Instagram', icon: '#', href: '#' },
			{ title: 'facebook', icon: '#', href: '#' },
		],
	},
	hero: {
		card: [
			{
				h1: 'EMENails',
				h3: 'Centro integral de belleza',
				p: 'Obtené los mejores servicios de belleza en un solo lugar. ¡Ofrecemos calidad y atención personalizada!',
			},
		],
	},
};

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
	);
};
