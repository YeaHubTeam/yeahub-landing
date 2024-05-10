import CheckCircleIcon from '@/shared/assets/icons/check-circle.svg';

import styles from './AuthAsideBenefit.module.css';

type AuthBenefitText = {
	text: string;
};

export const AuthAsideBenefit = ({ text }: AuthBenefitText) => {
	return (
		<li className={styles['text-wrapper']}>
			<span className={styles['icon-wrapper']}>
				<CheckCircleIcon />
			</span>
			{text}
		</li>
	);
};
