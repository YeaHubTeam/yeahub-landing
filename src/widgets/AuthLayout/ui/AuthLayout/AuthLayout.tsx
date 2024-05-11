import { ReactNode } from 'react';

import { AuthAside } from '../AuthAside/AuthAside';

import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
	children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className={styles.container}>
			<AuthAside />
			{children}
		</div>
	);
};
