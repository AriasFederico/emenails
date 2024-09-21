import './NavPc.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
export const NavPc = () => {
	const { header } = useContext(GlobalContext);
	const { menu } = header;
	return (
		<ul className='NavPc'>
			{menu.map(({ title, href }, i) => (
				<li className='NavPc-li' key={i}>
					<a href={href} className='NavPc-a'>
						{title}
					</a>
				</li>
			))}
		</ul>
	);
};
