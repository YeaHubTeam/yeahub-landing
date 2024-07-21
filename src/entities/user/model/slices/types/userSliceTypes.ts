import { User } from '../../types/user';

export interface UserSliceTypes {
	error: number | null;
	user: User;
}
