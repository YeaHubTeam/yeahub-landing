import { BenefitsBlock } from '@/widgets/BenefitsBlock';
import { CommunityBlock } from '@/widgets/CommunityBlock';
import { FeedbackBlock } from '@/widgets/FeedbackBlock';
import { Header } from '@/widgets/Header';
import { PhilosophyBlock } from '@/widgets/PhilosophyBlock';

export const MainPage = () => {
	return (
		<>
			<Header />
			<CommunityBlock />
			<PhilosophyBlock />
			<BenefitsBlock />
			<FeedbackBlock />
		</>
	);
};
