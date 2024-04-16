import { Suspense } from 'react';

import { MainPage } from '@/pages/MainPage';

import styles from './styles/App.module.css';

import './styles/normalize.css';

export const App = () => {
	return (
		<Suspense fallback="">
			<div className={styles.container}>
				<MainPage />
			</div>
		</Suspense>
	);
};
