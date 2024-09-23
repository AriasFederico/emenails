import './BtnHome.scss';
import { BackHome } from '../backHome';
export const BtnHome = () => {
	return (
		<a href='#header' className='BtnHome'>
			<BackHome />
			Volver al inicio
		</a>
	);
};
