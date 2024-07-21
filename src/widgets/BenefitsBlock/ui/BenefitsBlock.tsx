import test from '@/shared/assets/images/benefit.png';
import { mockBenefits } from '@/shared/const/mockBenefits';
import { BenefitCard } from '@/shared/ui/BenefitCard';

import cls from './BenefitsBlock.module.css';

const mockBemefitsFirst = mockBenefits.slice(0, 3);
const mockBemefitsSecond = mockBenefits.slice(3, 6);

export const BenefitsBlock = () => {
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
					<div className={cls.catchphrase}>
						<img style={{ height: '64px' }} src={test} alt="" />
						<p>Выбери, каким будет IT завтра, вместе c YeaHub</p>
					</div>
					{mockBemefitsSecond.map((benefit) => (
						<BenefitCard key={benefit.order} mockData={benefit} />
					))}
				</div>
			</div>
		</section>
	);
};

BenefitsBlock.displayName = 'BenefitsBlock';
