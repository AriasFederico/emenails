import './App.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/components';
import { About, Home } from './pages/pages';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
