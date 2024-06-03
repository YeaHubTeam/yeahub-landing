import { useSelector } from 'react-redux';

import { AppLogo } from '@/shared/ui/AppLogo';

import { getAuthData } from '@/entities/authentication';

import { AuthorizedBlock } from '../AuthorizedBlock/AuthorizedBlock';
import { UnauthorizedBlock } from '../UnauthorizedBlock/UnauthorizedBlock';

import cls from './Header.module.css';

export const Header = () => {
	const userData = useSelector(getAuthData);

	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<AppLogo />
			</div>
			{userData && userData.firstName ? (
				<AuthorizedBlock firstName={userData.firstName} avatarURL={userData.avatarUrl} />
			) : (
				<UnauthorizedBlock />
			)}
		</header>
	);
};
