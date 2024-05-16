import { baseApi } from '@/shared/config/api/baseApi';

import { Authentication } from '../model/types/authentication';

export interface ResponseData {
	access_token: string;
	refresh_token: string;
}

export const loginApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation<ResponseData, Authentication>({
			query: (login) => ({
				url: 'auth/login',
				method: 'POST',
				body: login,
			}),
		}),
	}),
});

export const { useLoginMutation } = loginApi;
