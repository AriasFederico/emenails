import './About.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Info } from './info/Info';
import { Map } from './map/Map';

import { AdressSvg, Calendar, TelSvg } from './components/svgAbout';

export const About = () => {
	const { about } = useContext(GlobalContext);
	const { hour, adress, tel } = about;

	return (
		<section className='About' id='about'>
			<h4 className='About-h4'>DÓNDE ESTAMOS</h4>
			<div className='About-cont'>
				<div className='About-info'>
					<Info title={hour} svg={<TelSvg classname={'About-svg'} />} />
					<Info title={adress} svg={<AdressSvg classname={'About-svg'} />} />
					<Info title={tel} svg={<Calendar classname={'About-svg'} />} />
				</div>
				<Map />
			</div>
		</section>
	);
};

// crear un componente que reciba un svg y datos de bbdd
