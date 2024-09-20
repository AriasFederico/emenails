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
};

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
	);
};
