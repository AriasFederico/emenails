import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from './context/GlobalContext.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
);
