import './App.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/components';
import { Home } from './pages/pages';

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
