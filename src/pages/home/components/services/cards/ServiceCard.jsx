import './ServiceCard.scss';
import { Check } from '../../../../../components/common/Check';

export const ServiceCard = ({ title, data }) => {
	return (
		<div className='ServiceCard'>
			<h3 className='ServiceCard-h3'>{title}</h3>
			<ul className='ServiceCard-ul'>
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
