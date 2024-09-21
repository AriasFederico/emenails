import { useContext, useState } from 'react';
import './Header.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { Hamburger } from './common/Hamburger';
import { Logo } from './common/Logo';
import { NavMobile } from './navmobile/NavMobile';
import { NavPc } from './navpc/NavPc';

export const Header = () => {
	const [isNavActive, setIsNavActive] = useState(false);

	return (
		<header className='Header'>
			<Logo className={'Header-logo'} />
			<NavPc />
			<Hamburger
				className={'Header-hamburger'}
				event={() => setIsNavActive(!isNavActive)}
			/>
			{isNavActive && <NavMobile />}
		</header>
	);
};
