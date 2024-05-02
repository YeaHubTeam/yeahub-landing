import avatar3 from '@/shared/assets/images/mockAvatar2.png';
import avatar2 from '@/shared/assets/images/mockAvatar3.png';
import avatar1 from '@/shared/assets/images/mockAvatar4.png';

export interface MockFeedback {
	feedback: string;
	author: string;
	avatar: string;
	occupation: string;
}

export const mockFeedback: Array<MockFeedback> = [
	{
		author: 'Дмитрий Никольский',
		avatar: avatar1,
		feedback:
			'«YeaHub предоставил мне платформу для обмена знаниями, которую я искал всю карьеру. Публиковать статьи и общаться c единомышленниками — бесценный опыт для специалиста c десятилетним стажем»',
		occupation: 'Backend developer',
	},
	{
		author: 'Леся Журавлёва',
		avatar: avatar2,
		feedback:
			'«Как начинающий разработчик, я чувствовал себя потерянным в огромном мире программирования. YeaHub помог мне построить чёткий учебный план, и теперь я чувствую себя увереннее и профессионально расту»',
		occupation: 'Frontend developer',
	},
	{
		author: 'Роман Нимов',
		avatar: avatar3,
		feedback:
			'«Впечатлен возможностями YeaHub по построению карьеры. Система рекомендаций и менторинга здесь — на высоте. Моя роль ментора на этой платформе также открыла мне новые горизонты для профессионального роста»',
		occupation: 'HR',
	},
	{
		author: 'Временный юзер 1',
		avatar: avatar1,
		feedback:
			'«YeaHub предоставил мне платформу для обмена знаниями, которую я искал всю карьеру. Публиковать статьи и общаться c единомышленниками — бесценный опыт для специалиста c десятилетним стажем»',
		occupation: 'Backend developer',
	},
	{
		author: 'Временный юзер 2',
		avatar: avatar2,
		feedback:
			'«Как начинающий разработчик, я чувствовал себя потерянным в огромном мире программирования. YeaHub помог мне построить чёткий учебный план, и теперь я чувствую себя увереннее и профессионально расту»',
		occupation: 'Frontend developer',
	},
	{
		author: 'Временный юзер 3',
		avatar: avatar3,
		feedback:
			'«Впечатлен возможностями YeaHub по построению карьеры. Система рекомендаций и менторинга здесь — на высоте. Моя роль ментора на этой платформе также открыла мне новые горизонты для профессионального роста»',
		occupation: 'HR',
	},
];
