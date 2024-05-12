import { ReactNode } from 'react';

import styles from './AuthBlock.module.css';

interface AuthBlockProps {
	children: ReactNode;
}

export const AuthBlock = ({ children }: AuthBlockProps) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Вход в личный кабинет</h1>
			{children}
		</div>
	);
};
