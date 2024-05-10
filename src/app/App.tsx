import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles/App.module.css';

import './styles/normalize.css';

export const App = () => {
	return (
		<Suspense fallback="">
			<div className={styles.container}>
				<Outlet />
			</div>
		</Suspense>
	);
};
