import { memo } from 'react';

import MapSVG from '@/shared/assets/icons/map-pin.svg';

import { type MockUsers } from '@/widgets/CommunityBlock';

import { classNames } from '../../libs/classNames/classNames';
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
			className={classNames(cls.userCard, {}, [cls['userCard' + user.id], className])}
			style={{ backgroundImage: user.backGround ? `url(${user.backGround})` : 'none' }}
		>
			<div>
				<AvatarFrame avatar={user.avatar} verified={user.verified} />
				<p className={cls.usersName}>{user.name}</p>
				<p className={cls.usersOccupation}>{user.occupation}</p>
			</div>

			<p className={cls.userLocation}>
				<MapSVG className={cls.svgIcon} /> {user.location}
			</p>
		</div>
	);
});

UserCard.displayName = 'UserCard';
