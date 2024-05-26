import { User } from '../../types/user';

export type PartialDataForUserSlice = Pick<User, 'firstName' | 'avatarURL'>;

export interface UserSliceTypes {
	error: number | null;
	user: PartialDataForUserSlice;
}
