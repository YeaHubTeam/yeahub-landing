import { memo } from 'react';

import MapSVG from '@/shared/assets/icons/map-pin.svg';

import { type MockUsers } from '../../const/mockUsers';
import { classNames } from '../../libs/utils/classNames/classNames';
import { AvatarFrame } from '../AvatarFrame';

import cls from './UserCard.module.css';

interface UserCardProps {
	className?: string;
	user: MockUsers;
}

export const UserCard = memo((props: UserCardProps) => {
	const { user, className } = props;
	return (
		<div
			className={classNames(cls['user-card'], {}, [cls['user-card' + user.id], className])}
			style={{ backgroundImage: user.backGround ? `url(${user.backGround})` : 'none' }}
		>
			<div>
				<AvatarFrame avatar={user.avatar} verified={user.verified} />
				<p className={cls['users - name']}>{user.name}</p>
				<p className={cls['users-occupation']}>{user.occupation}</p>
			</div>

			<p className={cls['user-location']}>
				<MapSVG className={cls['svg-icon']} /> {user.location}
			</p>
		</div>
	);
});

UserCard.displayName = 'UserCard';
