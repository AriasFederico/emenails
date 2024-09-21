import { createContext } from 'react';
export const GlobalContext = createContext();

const bbdd = {
	header: {
		menu: [
			{ title: 'Inicio', href: '/' },
			{ title: 'Servicios', href: '#services' },
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
	services: {
		nails: [
			'Belleza de manos',
			'Esmaltado tradicional',
			'Esmaltado semi',
			'Soft-gel básico',
			'Soft-gel simple',
			'Soft-gel completo',
			'Kapping básico',
			'Kapping decoraciones simples',
			'Kapping decoraciones completas',
		],
		hair: ['Cortes simples', 'Alisados', 'Botox', 'Tinturas'],
		feet: [
			'Belleza de pies',
			'Decoraciones de pies básico',
			'Belleza de pies + semi',
		],
	},
};

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
	);
};
