import './Hero.scss';
import { useContext } from 'react';
import { SvgRocket } from '../../../../components/common/SvgRocket';
import { GlobalContext } from '../../../../context/GlobalContext';

export const Hero = () => {
	const { hero } = useContext(GlobalContext);
	const { card } = hero;
	const { h1, h3, p } = card[0];

	return (
		<section className='Hero'>
			<div
				className='Hero-cont'
				data-aos={'flip-left'}
				data-aos-duration={1000}
			>
				<h1 className='Hero-h1'>{h1}</h1>
				<h3 className='Hero-h3'>{h3}</h3>
				<hr className='Hero-hr' />
				<p className='Hero-p'>{p}</p>
				<button className='Hero-btn'>
					<SvgRocket classname={'Hero-svg'} />
					RESERVAR TURNO
				</button>
			</div>
		</section>
	);
};
