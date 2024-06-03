/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Button } from 'yeahub-ui-kit';

import LogoutIcon from '@/shared/assets/icons/logout-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

import { useLazyLogoutQuery, authActions } from '@/entities/authentication';

import { Avatar } from '../Avatar/Avatar';

import styles from './UserProfile.module.css';

interface UserProfileProps {
	firstName: string;
	avatarURL: string | null;
}

export const UserProfile = ({ firstName, avatarURL }: UserProfileProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();
	const [trigger] = useLazyLogoutQuery();

	const handleDropdownClick = () => {
		console.log(isOpen);
		setIsOpen(!isOpen);
	};

	const onLogout = () => {
		trigger();
		dispatch(authActions.logOut());
	};

	return (
		<div className={styles.wrapper}>
			<div role="banner" className={styles['user-wrapper']} onClick={handleDropdownClick}>
				<p className={styles['user-name']}>{firstName}</p>
				<Avatar link={avatarURL || ''} />
			</div>
			{isOpen && (
				<div className={styles.dropdown}>
					<div className={styles['button-wrapper']}>
						<ProfileIcon className={styles.icon} />
						<Button tagName="a" theme="link" className={styles.button}>
							Мой профиль
						</Button>
					</div>
					<div className={styles['button-wrapper']}>
						<LogoutIcon className={styles.icon} />
						<Button tagName="a" theme="link" className={styles.button} onClick={onLogout}>
							Выйти
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};
