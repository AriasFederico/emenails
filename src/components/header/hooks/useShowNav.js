import { useState } from 'react';
export const useShowNav = () => {
	const [isNavActive, setIsNavActive] = useState(false);

	const handleNav = () => {
		setIsNavActive(!isNavActive);
		console.log(isNavActive);
	};

	return {
		isNavActive,
		handleNav,
	};
};
