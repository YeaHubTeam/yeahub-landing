import { createBrowserRouter } from 'react-router-dom';

import { AuthPage } from '@/pages/AuthPage';
import { MainPage } from '@/pages/MainPage';

import { App } from '../../../App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: 'auth',
				element: <AuthPage />,
			},
		],
	},
]);
