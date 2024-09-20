import logo from '../../../../public/iconEMENails.png';
export const Logo = ({ className }) => {
	return (
		<a href='/'>
			<img src={logo} alt='' className={className} />
			EMENails
		</a>
	);
};
