import './Services.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../../context/GlobalContext';
import { ServiceCard } from './cards/ServiceCard';

import bannerFeet from '../../../../../public/feet-card.jpg';
import bannerHair from '../../../../../public/hair-card.jpg';
import bannerNails from '../../../../../public/nails-card.jpg';

export const Services = () => {
	const { services } = useContext(GlobalContext);
	const { nails, hair, feet } = services;

	return (
		<section
			className='Services'
			id='services'
			data-aos={'zoom'}
			data-aos-duration={1500}
		>
			<h2 className='Services-h2'>SERVICIOS DE BELLEZA</h2>
			<h3 className='Services-h3'>
				Atención personalizada para realzar tu estilo y bienestar
			</h3>
			<div className='Services-cards'>
				<ServiceCard title={'Peluquería'} data={hair} banner={bannerHair} />
				<ServiceCard title={'Manicuría'} data={nails} banner={bannerNails} />
				<ServiceCard title={'Pedicuría'} data={feet} banner={bannerFeet} />
			</div>
		</section>
	);
};
