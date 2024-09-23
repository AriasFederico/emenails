import './BtnHome.scss';
import { BackHomeSvg } from '../BackHomeSvg.jsx';
export const BtnHome = () => {
	return (
		<a href='#header' className='BtnHome'>
			<BackHomeSvg />
			Volver al inicio
		</a>
	);
};
