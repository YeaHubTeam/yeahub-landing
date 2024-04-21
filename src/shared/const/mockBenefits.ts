import career from '@/shared/assets/images/careerImg.png';
import community from '@/shared/assets/images/communityImg.png';
import education from '@/shared/assets/images/educationImg.png';
import events from '@/shared/assets/images/eventsImg.png';
import mentoring from '@/shared/assets/images/mentoringImg.png';
import projects from '@/shared/assets/images/projectsImg.png';

type numberingType = 'top' | 'middle' | 'bottom';

export interface MockBenefits {
	title: string;
	content: string;
	order: string;
	backgroundColor: string;
	Icon: string;
	alt: string;
	numbering: numberingType;
}

export const mockBenefits: Array<MockBenefits> = [
	{
		title: 'Обучение',
		content:
			'Получите доступ к базе знаний и плану обучения по выбранной IT-профессии. Отслеживайте свой прогресс, проходите курсы, стажируйтесь и получайте обратную связь.',
		order: '01',
		backgroundColor: 'rgba(255, 255, 255, 1)',
		Icon: education,
		alt: 'book',
		numbering: 'bottom',
	},
	{
		title: 'Карьера',
		content:
			'Ваш профиль YeaHub помогает продвигаться в карьере и показывает вашу активность в IT сообществе.',
		order: '02',
		backgroundColor: 'rgba(240, 231, 255, 1)',
		Icon: career,
		alt: 'career',
		numbering: 'top',
	},
	{
		title: 'Сообщество',
		content:
			'Общайтесь c единомышленниками и обменивайтесь опытом. Ведите блог, пишите статьи и развивайте свой личный бренд.',
		order: '03',
		backgroundColor: 'rgba(255, 252, 242, 1)',
		Icon: community,
		alt: 'community',
		numbering: 'middle',
	},
	{
		title: 'Менторство',
		content:
			'Обучайтесь под руководством менторов или предлагайте свои знания, становясь ментором на YeaHub.',
		order: '04',
		backgroundColor: 'rgba(255, 252, 242, 1)',
		Icon: mentoring,
		alt: 'mentor',
		numbering: 'bottom',
	},
	{
		title: 'Проекты',
		content:
			'Участвуйте в системе распределения заказов, объединяйтесь в команды и работайте над проектами, получая за это доход.',
		order: '05',
		backgroundColor: 'rgba(240, 231, 255, 1)',
		Icon: projects,
		alt: 'projects',
		numbering: 'top',
	},
	{
		title: 'События',
		content:
			'Присоединяйтесь к конференциям, вебинарам, мастер-классам на YeaHub или станьте их организатором. Принимайте участие в состязаниях и вызовах, демонстрируя свои навыки.',
		order: '06',
		backgroundColor: 'rgba(255, 255, 255, 1)',
		Icon: events,
		alt: 'event',
		numbering: 'middle',
	},
];
