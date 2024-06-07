import { useEffect } from 'react';

import { useLazyGetRefreshTokenQuery, useProfileQuery } from '@/entities/authentication';

import { BenefitsBlock } from '@/widgets/BenefitsBlock';
import { CheckSystemBlock } from '@/widgets/CheckSystemBlock';
import { CommunityBlock } from '@/widgets/CommunityBlock';
import { FeedbackBlock } from '@/widgets/FeedbackBlock';
import { Footer } from '@/widgets/Footer';
import { GoalBlock } from '@/widgets/GoalBlock';
import { Header } from '@/widgets/Header';
import { HowToJoinBlock } from '@/widgets/HowToJoinBlock';
import { PhilosophyBlock } from '@/widgets/PhilosophyBlock';

import styles from './MainPage.module.css';

export const MainPage = () => {
	const { data: _userData, error } = useProfileQuery();
	const [trigger] = useLazyGetRefreshTokenQuery();

	useEffect(() => {
		if (error) {
			trigger();
		}
	}, [error, trigger]);

	return (
		<div className={styles.container}>
			<Header />
			<CommunityBlock />
			<PhilosophyBlock />
			<HowToJoinBlock />
			<GoalBlock />
			<CheckSystemBlock />
			<BenefitsBlock />
			<FeedbackBlock />
			<Footer />
		</div>
	);
};
