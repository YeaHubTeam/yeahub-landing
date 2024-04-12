import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@/shared/assets/icons/logo.svg';

import { classNames } from '../../libs/classNames/classNames';

import cls from './AppLogo.module.css';

type LogoColorType = 'white' | 'black';

interface AppLogoProps {
	fill?: LogoColorType;
}

export const AppLogo: FC<AppLogoProps> = ({ fill = 'black' }) => {
	return (
		<NavLink to="/" className={cls.link}>
			<Logo className={classNames(cls.image, {}, [cls[fill]])} />
		</NavLink>
	);
};
