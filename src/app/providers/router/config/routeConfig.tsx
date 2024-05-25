import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { RegistrationPage } from '@/pages/RegistrationPage';

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
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'registration',
				element: <RegistrationPage />,
			},
		],
	},
]);
