import { useEffect } from 'react';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

import {
	useLazyGetRefreshTokenQuery,
	useProfileQuery,
	authActions,
} from '@/entities/authentication';

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
	const { data: userData, error } = useProfileQuery();
	const [trigger] = useLazyGetRefreshTokenQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log(error);
		if (error) {
			trigger()
				.unwrap()
				.then((response) => {
					if (response) {
						dispatch(authActions.setAccessToken(response));
						dispatch(authActions.setUserData(response.user));
					}
				})
				.catch((error) => console.log(error));
		}
		if (userData) dispatch(authActions.setUserData(userData));
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
