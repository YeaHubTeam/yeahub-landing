import { memo } from 'react';

import { mockBenefits } from '@/shared/const/mockBenefits';
import { BenefitCard } from '@/shared/ui/BenefitCard';

import cls from './BenefitsBlock.module.css';

const mockBemefitsFirst = mockBenefits.slice(0, 3);
const mockBemefitsSecond = mockBenefits.slice(3, 6);

export const BenefitsBlock = memo(() => {
	return (
		<section className={cls['benefits-block']}>
			<h2 className={cls.title}>
				Привилегии членства <br /> в сообществе
			</h2>
			<div className={cls.container}>
				<div className={cls['first-block']}>
					{mockBemefitsFirst.map((benefit) => (
						<BenefitCard key={benefit.order} mockData={benefit} />
					))}
				</div>
				<div className={cls['second-block']}>
					{mockBemefitsSecond.map((benefit) => (
						<BenefitCard key={benefit.order} mockData={benefit} />
					))}
				</div>
			</div>
		</section>
	);
});

BenefitsBlock.displayName = 'BenefitsBlock';
