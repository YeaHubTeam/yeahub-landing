import { memo } from 'react';

import { FeedbackCard } from '@/shared/ui/FeedbackCard';

import cls from './FeedbackBlock.module.css';

export const FeedbackBlock = memo(() => {
	return (
		<section className={cls['feedback-block']}>
			<h2 className={cls.title}>Отзывы членов сообщества</h2>
			<div className={cls.container}>
				<FeedbackCard />
				<FeedbackCard />
				<FeedbackCard />
			</div>
		</section>
	);
});

FeedbackBlock.displayName = 'FeedbackBlock';
