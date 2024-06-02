import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppLogo } from '@/shared/ui/AppLogo';
import { Button } from '@/shared/ui/Button';

import { getUserData } from '@/entities/user';

import { UserProfile } from '@/features/header/UserProfile';

import cls from './Header.module.css';

export const Header = () => {
	const userData = useSelector(getUserData);

	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<AppLogo />
			</div>
			{userData.firstName ? (
				<UserProfile firstName={userData.firstName} avatarURL={userData.avatarUrl} />
			) : (
				<nav className={cls.navigation}>
					<Button btnType="tertiary">
						<Link to={'/login'}>Вход</Link>
					</Button>
					<Button btnSize="l">
						<Link to={'/registration'}>Регистрация</Link>
					</Button>
				</nav>
			)}
		</header>
	);
};
