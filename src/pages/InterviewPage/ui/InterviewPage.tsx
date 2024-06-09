import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { InterviewBlock } from '@/widgets/InterviewBlock';

import styles from './InterviewPage.module.css';

export const InterviewPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<InterviewBlock />
			<Footer />
		</div>
	);
};
