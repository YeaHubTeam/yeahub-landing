import CheckCircleIcon from '@/shared/assets/icons/check-circle.svg';

import styles from './BenefitItem.module.css';

interface BenefitItemProps {
	text: string;
}

export const BenefitItem = ({ text }: BenefitItemProps) => {
	return (
		<li className={styles['text-wrapper']}>
			<span className={styles['icon-wrapper']}>
				<CheckCircleIcon />
			</span>
			{text}
		</li>
	);
};
