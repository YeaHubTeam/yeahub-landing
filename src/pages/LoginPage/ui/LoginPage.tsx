import { LoginCreateForm } from '@/widgets/authentication/login';
import { AuthLayout } from '@/widgets/AuthLayout';

import styles from './LoginPage.module.css';

export const LoginPage = () => {
	return (
		<AuthLayout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Вход в личный кабинет</h1>
				<LoginCreateForm />
			</div>
		</AuthLayout>
	);
};
