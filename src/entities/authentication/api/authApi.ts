import { baseApi } from '@/shared/config/api/baseApi';

import { Auth } from '../model/types/auth';

export interface ResponseData {
	access_token: string;
	user: {
		id: string;
		firstName: string;
		lastName: string;
		phone: string;
		email: string;
		country: string | null;
		city: string | null;
		birthday: string | null;
		address: string | null;
		avatarUrl: string | null;
	};
}

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		auth: build.mutation<ResponseData, Auth>({
			query: (auth) => ({
				url: 'auth/login',
				method: 'POST',
				body: auth,
			}),
		}),
	}),
});

export const { useAuthMutation } = authApi;
