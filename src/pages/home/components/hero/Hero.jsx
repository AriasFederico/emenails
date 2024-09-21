import './Hero.scss';
import { useContext } from 'react';
import { BtnSubmit } from '../../../../components/common/submit/BtnSubmit';
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
				<BtnSubmit />
			</div>
		</section>
	);
};
