export type User = {
	id: string;
	firstName: string;
	lastName: string;
	phone: string;
	country: string | null;
	city: string | null;
	email: string;
	birthday: string | null;
	address: string | null;
	avatarURL: string | null;
	createdAt: Date;
	updatedAt: Date;
};
