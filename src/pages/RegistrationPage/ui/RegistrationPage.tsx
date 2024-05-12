import { AuthLayout } from '@/widgets/AuthLayout';

import styles from './RegistrationPage.module.css';

export const RegistrationPage = () => {
	return (
		<AuthLayout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Регистрация</h1>
			</div>
		</AuthLayout>
	);
};
