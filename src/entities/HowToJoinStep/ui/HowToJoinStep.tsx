import { ArrowIcon } from '@/shared/ui/ArrowIcon';

import cls from './HowToJoinStep.module.css';

interface props {
	img: string;
	arrowColor: string;
	bcColor: string;
	text: string;
}

export const HowToJoinStep = ({ img, arrowColor, bcColor, text }: props) => {
	return (
		<div className={cls.step} style={{ backgroundColor: bcColor }}>
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
