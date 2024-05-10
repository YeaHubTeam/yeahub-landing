import { Link } from 'react-router-dom';

import { AppLogo } from '@/shared/ui/AppLogo';
import { Button } from '@/shared/ui/Button';

import cls from './Header.module.css';

export const Header = () => {
	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<AppLogo />
			</div>

			<nav className={cls.navigation}>
				<Button btnType="tertiary">
					<Link to={'/auth'}>Вход</Link>
				</Button>
				<Button btnSize="l">Регистрация</Button>
			</nav>
		</header>
	);
};
