import { type MockBenefits } from '../../const/mockBenefits';

import cls from './BenefitCard.module.css';

interface BenefitCardProps {
	mockData: MockBenefits;
}

export const BenefitCard = (props: BenefitCardProps) => {
	const { Icon, backgroundColor, content, numbering, order, title, alt } = props.mockData;

	return (
		<div className={cls['benefit-card']} style={{ background: backgroundColor }}>
			{numbering === 'bottom' && (
				<div className={cls.container}>
					<div>
						<h3>{title}</h3>
						<p>{content}</p>
					</div>
					<div className={cls['container-order']}>
						<div className={cls.order}>{order}</div>
						<div className={cls.icon}>
							<img src={Icon} alt={alt} />
						</div>
					</div>
				</div>
			)}
			{numbering === 'top' && (
				<div className={cls.container}>
					<div className={cls['container-order-top']}>
						<div className={cls['container-order']}>
							<div className={cls.order}>{order}</div>
							<div className={cls.icon}>
								<img src={Icon} alt={alt} />
							</div>
						</div>
						<p>{content}</p>
					</div>
					<div>
						<h3>{title}</h3>
					</div>
				</div>
			)}
			{numbering === 'middle' && (
				<div className={cls.container}>
					<div>
						<h3>{title}</h3>
					</div>
					<div className={cls['container-order-top']}>
						<div className={cls['container-order']}>
							<div className={cls.order}>{order}</div>
							<div className={cls.icon}>
								<img src={Icon} alt={alt} />
							</div>
						</div>
						<p>{content}</p>
					</div>
				</div>
			)}
		</div>
	);
};

BenefitCard.displayName = 'BenefitCard';
