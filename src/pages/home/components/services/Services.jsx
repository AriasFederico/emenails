import './Services.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../../context/GlobalContext';
import { ServiceCard } from './cards/ServiceCard';

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
			<h2 className='Services-h2'>Servicios de belleza</h2>
			<h3 className='Services-h3'>
				Atención personalizada para realzar tu estilo y bienestar
			</h3>
			<div className='Services-cards'>
				<ServiceCard title={'Peluquería'} data={hair} />
				<ServiceCard title={'Manicuría'} data={nails} />
				<ServiceCard title={'Pedicuría'} data={feet} />
			</div>
		</section>
	);
};
