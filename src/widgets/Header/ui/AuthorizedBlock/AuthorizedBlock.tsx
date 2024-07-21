/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Button } from 'yeahub-ui-kit';

import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import { AuthAvatarFrame } from '@/shared/ui/AuthAvatarFrame';

import { Logout } from '@/features/authentication/logout/Logout';

import styles from './AuthorizedBlock.module.css';

interface UserProfileProps {
	firstName: string;
	avatarURL: string | null;
}

export const AuthorizedBlock = ({ firstName, avatarURL }: UserProfileProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDropdownClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.wrapper}>
			<div role="banner" className={styles['user-wrapper']} onClick={handleDropdownClick}>
				<p className={styles['user-name']}>{firstName}</p>
				<AuthAvatarFrame link={avatarURL || ''} />
			</div>
			{isOpen && (
				<div className={styles.dropdown}>
					<div className={styles['button-wrapper']}>
						<ProfileIcon className={styles.icon} />
						<Button tagName="a" theme="link" className={styles.button}>
							Мой профиль
						</Button>
					</div>
					<Logout />
				</div>
			)}
		</div>
	);
};
