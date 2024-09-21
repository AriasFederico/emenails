import './NavMobile.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
export const NavMobile = () => {
	const { header } = useContext(GlobalContext);
	const { menu } = header;

	return (
		<div className='NavMobile' data-aos={'fade-right'}>
			<ul className='NavMobile-ul'>
				{menu.map(({ title, href }, i) => (
					<li className='NavMobile-li' key={i}>
						<a href={href} className='NavMobile-a'>
							{title}
						</a>
					</li>
				))}
			</ul>
			<button className='NavMobile-btn'>Reservar turno</button>
		</div>
	);
};
