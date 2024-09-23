import './ServiceCard.scss';
import { Check } from '../../../../../components/common/Check';

export const ServiceCard = ({ title, data, banner }) => {
	return (
		<div className='ServiceCard'>
			<img src={banner} alt={title} className='ServiceCard-banner' />
			<ul className='ServiceCard-ul'>
				<h3 className='ServiceCard-h3'>{title}</h3>
				{data.map((e, i) => (
					<li key={i} className='ServiceCard-li'>
						<Check classname={'ServiceCard-check'} />
						{e}
					</li>
				))}
			</ul>
		</div>
	);
};
