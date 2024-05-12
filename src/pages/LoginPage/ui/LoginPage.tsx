import { LoginCreateForm } from '@/features/authentication/login';

import { AuthBlock } from '@/widgets/AuthBlock';
import { AuthLayout } from '@/widgets/AuthLayout';
//import styles from './LoginPage.module.css';

export const LoginPage = () => {
	return (
		<AuthLayout>
			<AuthBlock>
				<LoginCreateForm />
			</AuthBlock>
		</AuthLayout>
	);
};
