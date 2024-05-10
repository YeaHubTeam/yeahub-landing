import { ReactNode } from 'react';

import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
	children?: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className={styles.wrapper}>
			AuthLayout
			{children}
		</div>
	);
};
