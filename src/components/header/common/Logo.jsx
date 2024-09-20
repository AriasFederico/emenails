import logo from '../../../../public/iconEMENails.png';
export const Logo = ({ className }) => {
	return (
		<a href='/' className={className}>
			<img src={logo} alt='' className={className} />
		</a>
	);
};
