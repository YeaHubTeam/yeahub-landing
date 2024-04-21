import { memo } from 'react';

import test from '@/shared/assets/images/mockAvatar1.png';

import { AvatarFrame } from '../AvatarFrame';

import cls from './FeedbackCard.module.css';

export const FeedbackCard = memo(() => {
	return (
		<div className={cls['feedback-card']}>
			<p>
				«Как начинающий разработчик, я чувствовал себя потерянным в огромном мире программирования.
				YeaHub помог мне построить чёткий учебный план, и теперь я чувствую себя увереннее и
				профессионально расту»
			</p>
			<div className={cls.author}>
				<AvatarFrame avatar={test} />
				<div>
					<p className={cls.name}>Дмитрий Никольский</p>
					<p className={cls.occupation}>Backend developer</p>
				</div>
			</div>
		</div>
	);
});
FeedbackCard.displayName = 'FeedbackCard';
