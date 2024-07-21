import { ArrowIcon } from '@/shared/ui/ArrowIcon';

import cls from './HowToJoinStep.module.css';

interface HowToJoinStepProps {
	img: string;
	imgDescription: string;
	arrowColor: string;
	bgColor: string;
	text: string;
}

export const HowToJoinStep = (props: HowToJoinStepProps) => {
	const { img, imgDescription, arrowColor, bgColor, text } = props;
	return (
		<div className={cls.step} style={{ backgroundColor: bgColor }}>
			<div className={cls['arrow-container']}>
				<ArrowIcon color={arrowColor} />
			</div>
			<div className={cls['img-container']}>
				<img src={img} alt={imgDescription} />
			</div>
			<p>{text}</p>
		</div>
	);
};
