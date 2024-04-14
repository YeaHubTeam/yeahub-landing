import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import verifiedIcon from '@/shared/assets/images/verifiedIcon.png';

import { classNames } from '../../libs/classNames/classNames';

import cls from './AvatarFrame.module.css';

interface AvatarFrameProps {
	className?: string;
	avatar?: string;
	verified?: boolean;
}

export const AvatarFrame = memo((props: AvatarFrameProps) => {
	const { avatar, verified, className } = props;

	return (
		<div className={classNames(cls.avatarFrame, {}, [className])}>
			<NavLink to="/">
				<img src={avatar} alt="User's Avatar" />
				{verified && <img src={verifiedIcon} alt="verified user" className={cls.verified} />}
			</NavLink>
		</div>
	);
});
AvatarFrame.displayName = 'AvatarFrame';
