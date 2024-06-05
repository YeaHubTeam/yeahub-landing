import { memo } from 'react';

import { type MockFeedback } from '../../const/mockFeedback';
import { classNames } from '../../libs/utils/classNames/classNames';
import { AvatarFrame } from '../AvatarFrame';

import cls from './FeedbackCard.module.css';

interface FeedbackCardProps {
	user: MockFeedback;
	className?: string;
}

export const FeedbackCard = memo((props: FeedbackCardProps) => {
	const { user, className = '' } = props;
	const { author, avatar, feedback, occupation } = user;
	return (
		<div className={classNames(cls['feedback-card'], {}, [className])}>
			<p>{feedback}</p>
			<div className={cls.author}>
				<AvatarFrame avatar={avatar} />
				<div>
					<p className={cls.name}>{author}</p>
					<p className={cls.occupation}>{occupation}</p>
				</div>
			</div>
		</div>
	);
});
FeedbackCard.displayName = 'FeedbackCard';
