import { Link } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import styles from './UnauthorizedBlock.module.css';

export const UnauthorizedBlock = () => {
	return (
		<nav className={styles.navigation}>
			<Button theme="tertiary">
				<Link to={'/login'}>Вход</Link>
			</Button>
			<Button className={styles['colored-text']}>
				<Link to={'/registration'}>Регистрация</Link>
			</Button>
		</nav>
	);
};
