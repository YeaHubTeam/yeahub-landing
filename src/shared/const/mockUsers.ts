import avatar1 from '@/shared/assets/images/mockAvatar1.png';
import avatar2 from '@/shared/assets/images/mockAvatar2.png';
import avatar3 from '@/shared/assets/images/mockAvatar3.png';
import avatar4 from '@/shared/assets/images/mockAvatar4.png';
import avatar5 from '@/shared/assets/images/mockAvatar5.png';
import backGround1 from '@/shared/assets/images/mockBG1.png';
import backGround2 from '@/shared/assets/images/mockBG2.png';
import backGround3 from '@/shared/assets/images/mockBG3.png';

export interface MockUsers {
	id: number;
	name: string;
	occupation: string;
	avatar: string;
	verified: boolean;
	location: string;
	backGround?: string;
}

export const fakeUsers: Array<MockUsers> = [
	{
		id: 0,
		name: 'Дмитрий Никольский',
		occupation: 'Game developer',
		avatar: avatar1,
		verified: true,
		location: 'Австрия, Вена',
		backGround: backGround1,
	},
	{
		id: 1,
		name: 'Дмитрий Никольский',
		occupation: 'Backend developer',
		avatar: avatar2,
		verified: true,
		location: 'Австрия, Вена',
	},
	{
		id: 2,
		name: 'Леся Журавлёва',
		occupation: 'UI/UX designer',
		avatar: avatar3,
		verified: true,
		location: 'Австрия, Вена',
	},
	{
		id: 3,
		name: 'Роман Нимов',
		occupation: 'HR',
		avatar: avatar2,
		verified: true,
		location: 'Австрия, Вена',
	},
	{
		id: 4,
		name: 'Дмитрий Никольский',
		occupation: 'Frontend developer',
		avatar: avatar4,
		verified: true,
		location: 'Австрия, Вена',
		backGround: backGround2,
	},
	{
		id: 5,
		name: 'Леся Журавлёва',
		occupation: 'UI/UX designer',
		avatar: avatar5,
		verified: true,
		location: 'Австрия, Вена',
	},
	{
		id: 6,
		name: 'Леся Журавлёва',
		occupation: 'Graphic Designer',
		avatar: avatar3,
		verified: true,
		location: 'Австрия, Вена',
		backGround: backGround3,
	},
];
