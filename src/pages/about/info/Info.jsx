import './Info.scss';
export const Info = ({ svg, title }) => {
	return (
		<div className='Info'>
			{svg}
			{title}
		</div>
	);
};
