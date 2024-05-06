import Step1 from '@/shared/assets/images/step1.png';
import Step2 from '@/shared/assets/images/step2.png';

interface StepsData {
	id: number;
	imgDescription: string;
	img: string;
	arrowColor: string;
	bgColor: string;
	text: string;
}

export const mockSteps: StepsData[] = [
	{
		id: 1,
		imgDescription: 'Первый шаг: заполнение профиля',
		img: Step1,
		arrowColor: '#FFDA85',
		bgColor: '#fffcf2',
		text: 'Заполните ваш профиль, следуя нашим пошаговым подсказкам и гайдам. Создайте презентацию своих навыков, которая действительно выделяется.',
	},
	{
		id: 2,
		img: Step2,
		imgDescription: 'Второй шаг: проверка знаний',
		arrowColor: '#6A0BFF',
		bgColor: '#f0e7ff',
		text: 'Пройдите проверку ваших профессиональных навыков и знаний. Наш бесплатный процесс оценки	включает различные этапы — от теоретических знаний до практического тестирования.',
	},
	{
		id: 3,
		img: Step1,
		imgDescription: 'Первый шаг: заполнение профиля',
		arrowColor: '#FFDA85',
		bgColor: '#fffcf2',
		text: 'Заполните ваш профиль, следуя нашим пошаговым подсказкам и гайдам. Создайте презентацию своих навыков, которая действительно выделяется.',
	},
	{
		id: 4,
		img: Step2,
		imgDescription: 'Второй шаг: проверка знаний',
		arrowColor: '#6A0BFF',
		bgColor: '#f0e7ff',
		text: 'Пройдите проверку ваших профессиональных навыков и знаний. Наш бесплатный процесс оценки	включает различные этапы — от теоретических знаний до практического тестирования.',
	},
];
