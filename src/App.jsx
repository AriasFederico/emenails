import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={'#'}></Route>
				<Route path='/about' element={'#'}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
