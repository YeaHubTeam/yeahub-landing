import { baseApi } from '@/shared/config/api/baseApi';

import { Auth } from '../model/types/auth';

export interface ResponseData {
	access_token: string;
	refresh_token: string;
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
