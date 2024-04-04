import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.css';

export const MainLayout = () => {
	return (
		<section className={`${styles.container} ${styles.layout}`}>
			<div className={styles.content}>
				<Outlet />
			</div>
		</section>
	);
};
