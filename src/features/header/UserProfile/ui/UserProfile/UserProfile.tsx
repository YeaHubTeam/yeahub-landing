import { Button } from 'yeahub-ui-kit';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

import { userActions } from '@/entities/user';

import { Avatar } from '../Avatar/Avatar';

import styles from './UserProfile.module.css';

interface UserProfileProps {
	firstName: string;
	avatarURL: string;
}

export const UserProfile = ({ firstName, avatarURL }: UserProfileProps) => {
	const dispatch = useAppDispatch();
	const onLogout = () => {
		dispatch(userActions.logOut());
	};

	return (
		<div className={styles.wrapper}>
			<div>
				<p className={styles['user-name']}>{firstName}</p>
				<Avatar link={avatarURL} />
			</div>
			<div>
				<div>
					<Button>Мой профиль</Button>
				</div>
				<div>
					<Button onClick={onLogout}>Выйти</Button>
				</div>
			</div>
		</div>
	);
};
