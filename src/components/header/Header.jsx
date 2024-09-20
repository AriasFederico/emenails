import { useContext } from 'react';
import './Header.scss';
import { GlobalContext } from '../../context/GlobalContext';
import { Hamburger } from './common/Hamburger';
import { Logo } from './common/Logo';

export const Header = () => {
	return (
		<div className='Header'>
			<Logo className={'Header-logo'} />
			<Hamburger className={'Header-hamburger'} />
		</div>
	);
};
