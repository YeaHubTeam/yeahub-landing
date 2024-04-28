import Step1 from '@/shared/assets/images/step1.png';
import Step2 from '@/shared/assets/images/step2.png';

interface data {
	id: number;
	img: string;
	arrowColor: string;
	bcColor: string;
	text: string;
}

export const mockSteps: data[] = [
	{
		id: 1,
		img: Step1,
		arrowColor: '#FFDA85',
		bcColor: '#fffcf2',
		text: 'Заполните ваш профиль, следуя нашим пошаговым подсказкам и гайдам. Создайте презентацию своих навыков, которая действительно выделяется.',
	},
	{
		id: 2,
		img: Step2,
		arrowColor: '#6A0BFF',
		bcColor: '#f0e7ff',
		text: 'Пройдите проверку ваших профессиональных навыков и знаний. Наш бесплатный процесс оценки	включает различные этапы — от теоретических знаний до практического тестирования.',
	},
	{
		id: 3,
		img: Step1,
		arrowColor: '#FFDA85',
		bcColor: '#fffcf2',
		text: 'Заполните ваш профиль, следуя нашим пошаговым подсказкам и гайдам. Создайте презентацию своих навыков, которая действительно выделяется.',
	},
	{
		id: 4,
		img: Step2,
		arrowColor: '#6A0BFF',
		bcColor: '#f0e7ff',
		text: 'Пройдите проверку ваших профессиональных навыков и знаний. Наш бесплатный процесс оценки	включает различные этапы — от теоретических знаний до практического тестирования.',
	},
];
