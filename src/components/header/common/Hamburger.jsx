export const Hamburger = ({ className, event }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 2048 2048'
			className={className}
			onClick={event}
		>
			<path
				fill='currentColor'
				d='M1024 384v128H0V384zM0 896h2048v128H0zm1024 640v-128h1024v128z'
			/>
		</svg>
	);
};
