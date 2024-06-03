export interface AuthSliceUserTypes {
	id: string | null;
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
	email: string | null;
	country: string | null;
	city: string | null;
	birthday: string | null;
	address: string | null;
	avatarUrl: string | null;
}

export interface AuthSliceTypes {
	accessToken: string;
	user: AuthSliceUserTypes | null;
	error: number | null;
}
