import './Home.scss';
import { Footer } from '../../components/footer/Footer';
import { About } from '../about/About';
import { BtnHome } from './components/btnHome/BtnHome';
import { Hero, Services } from './components/subpages';

export const Home = () => {
	return (
		<main className='Home'>
			<Hero />
			<Services />
			<About />
			<BtnHome />
			<Footer />
		</main>
	);
};
