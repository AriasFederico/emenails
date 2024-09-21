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
				p: '¡Obtené el mejor cuidado en manicuria, pedicuria y bijouterie! Atención personalizada y dedicada solo para vos.',
			},
		],
	},
};

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
	);
};
