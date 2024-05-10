import { AuthAside } from '@/entities/AuthAside';

import { AuthBlock } from '@/widgets/AuthBlock';

import styles from './AuthPage.module.css';

export const AuthPage = () => {
	return (
		<div className={styles.container}>
			<AuthAside />
			<AuthBlock />
		</div>
	);
};
