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
				<Button Btntype="Tertiary">Вход</Button>
				<Button>Регистрация</Button>
			</nav>
		</header>
	);
};
