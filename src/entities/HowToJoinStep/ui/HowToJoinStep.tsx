import { ArrowIcon } from '@/shared/ui/ArrowIcon';

import cls from './HowToJoinStep.module.css';

interface props {
	img: string;
	arrowColor: string;
	bgColor: string;
	text: string;
}

export const HowToJoinStep = ({ img, arrowColor, bgColor, text }: props) => {
	return (
		<div className={cls.step} style={{ backgroundColor: bgColor }}>
			<div className={cls['arrow-container']}>
				<ArrowIcon color={arrowColor} />
			</div>
			<div className={cls['img-container']}>
				<img src={img} alt="step" />
			</div>
			<p>{text}</p>
		</div>
	);
};
