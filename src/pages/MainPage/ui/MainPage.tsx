import { CommunityBlock } from '@/widgets/CommunityBlock';
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
		</>
	);
};
