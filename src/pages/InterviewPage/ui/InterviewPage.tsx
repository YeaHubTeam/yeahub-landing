import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { InterviewBlock } from '@/widgets/InterviewBlock';
import { InterviewModeBlock } from '@/widgets/InterviewModeBlock';
import { PlatformInterfaceBlock } from '@/widgets/PlatformInterfaceBlock';
import { ProgressBlock } from '@/widgets/ProgressBlock';
import { TrainingBlock } from '@/widgets/TrainingBlock';

import styles from './InterviewPage.module.css';

export const InterviewPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<InterviewBlock />
			<TrainingBlock />
			<PlatformInterfaceBlock />
			<InterviewModeBlock />
			<ProgressBlock />
			<Footer />
		</div>
	);
};
