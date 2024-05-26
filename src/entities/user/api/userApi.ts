import { baseApi } from '@/shared/config/api/baseApi';

import { User } from '../model/types/user';

export interface ResponseData {
	access_token: string;
	refresh_token: string;
}

export const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		user: build.query<User, null>({
			query: () => 'auth/profile',
		}),
	}),
});

export const { useUserQuery } = userApi;
