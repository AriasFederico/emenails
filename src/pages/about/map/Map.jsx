import './Map.scss';
export const Map = () => {
	// https://www.maps.ie/create-google-map/

	return (
		<div className='gmap-fram'>
			<div>
				<iframe
					title='map'
					id='asd'
					width='100%'
					height='380'
					frameBorder='0'
					marginHeight='0'
					marginWidth='0'
					src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20calle%2057%20numero%2013%20los%20hornos+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
				>
					<a href='https://www.gps.ie/'>gps trackers</a>
				</iframe>
			</div>
		</div>
	);
};
