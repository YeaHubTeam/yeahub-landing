import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/shared/assets/icons/logo.svg';

import styles from './AppLogo.module.css';

type LogoColorType = 'white' | 'black';

interface AppLogoProps {
	fill?: LogoColorType;
}

export const AppLogo: FC<AppLogoProps> = ({ fill = 'black' }) => {
	return (
		<NavLink to="/" className={styles.link}>
			<Logo className={`${styles.image} ${styles[fill]}`} />
		</NavLink>
	);
};
