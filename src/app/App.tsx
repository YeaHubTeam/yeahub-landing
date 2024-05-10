import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './styles/normalize.css';
import './styles/App.module.css';

export const App = () => {
	return (
		<Suspense fallback="">
			<Outlet />
		</Suspense>
	);
};
