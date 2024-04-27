import { BenefitsBlock } from '@/widgets/BenefitsBlock';
import { CheckSystemBlock } from '@/widgets/CheckSystemBlock';
import { CommunityBlock } from '@/widgets/CommunityBlock';
import { FeedbackBlock } from '@/widgets/FeedbackBlock';
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
			<CheckSystemBlock />
			<BenefitsBlock />
			<FeedbackBlock />
		</>
	);
};
