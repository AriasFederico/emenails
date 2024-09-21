import { SvgRocket } from '../SvgRocket';
import './BtnSubmit.scss';

export const BtnSubmit = ({ classname }) => {
	const handleWhatsAppClick = () => {
		const phoneNumber = '2213186889'; // Número de teléfono del cliente con código del país y sin espacios
		const message = '¡Hola! Me gustaría reservar un turno.'; // Mensaje personalizado
		const url = `https://wa.me/${phoneNumber}?message=${encodeURIComponent(message)}`;

		window.open(url, '_blank');
	};
	return (
		<button className={`BtnSubmit ${classname}`} onClick={handleWhatsAppClick}>
			<SvgRocket classname={'BtnSubmit-svg'} />
			RESERVÁ TU TURNO
		</button>
	);
};
