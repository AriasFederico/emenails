import './NavMobile.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { BtnSubmit } from '../../common/submit/BtnSubmit';

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
			<BtnSubmit />
		</div>
	);
};
