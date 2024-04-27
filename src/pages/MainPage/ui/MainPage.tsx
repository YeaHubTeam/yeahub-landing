import { BenefitsBlock } from '@/widgets/BenefitsBlock';
import { CommunityBlock } from '@/widgets/CommunityBlock';
import { FeedbackBlock } from '@/widgets/FeedbackBlock';
import { GoalBlock } from '@/widgets/GoalBlock';
import { Header } from '@/widgets/Header';
import { HowToJoinBlock } from '@/widgets/HowToJoinBlock';
import { PhilosophyBlock } from '@/widgets/PhilosophyBlock';

export const MainPage = () => {
	return (
		<>
			<Header />
			<CommunityBlock />
			<PhilosophyBlock />
			<HowToJoinBlock />
			<GoalBlock />
			<BenefitsBlock />
			<FeedbackBlock />
		</>
	);
};
