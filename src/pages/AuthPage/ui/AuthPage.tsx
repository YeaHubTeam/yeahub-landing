import { AuthAside } from '@/entities/AuthAside';

import styles from './AuthPage.module.css';

export const AuthPage = () => {
	return (
		<div className={styles.wrapper}>
			<AuthAside />
		</div>
	);
};
