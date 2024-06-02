import { useEffect } from 'react';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

import { authActions } from '@/entities/authentication';
import { useLazyGetRefreshTokenQuery, useUserQuery, userActions } from '@/entities/user';

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
	const { data: userData, error } = useUserQuery(null);
	const [trigger] = useLazyGetRefreshTokenQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log(error);
		if (error) {
			trigger(null)
				.unwrap()
				.then((response) => response)
				.then((data) => {
					if (data) {
						dispatch(authActions.setUserData(data));
						dispatch(userActions.setUserData(data.user));
					}
				})
				.catch((error) => console.log(error));
		}
		if (userData) dispatch(userActions.setUserData(userData));
	}, [error, userData]);

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
