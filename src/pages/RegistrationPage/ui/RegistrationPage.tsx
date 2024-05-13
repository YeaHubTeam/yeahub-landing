import { AuthLayout } from '@/widgets/AuthLayout';
import { UserCreateForm } from '@/widgets/registration/user';

import styles from './RegistrationPage.module.css';

export const RegistrationPage = () => {
	return (
		<AuthLayout>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Регистрация</h1>
				<UserCreateForm />
			</div>
		</AuthLayout>
	);
};
