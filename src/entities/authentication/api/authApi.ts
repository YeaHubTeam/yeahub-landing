import { baseApi } from '@/shared/config/api/baseApi';

import { Auth } from '../model/types/auth';

export interface GetProfileResponse {
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
}

export interface GetLoginResponse {
	access_token: string;
	user: GetProfileResponse;
}

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		auth: build.mutation<GetLoginResponse, Auth>({
			query: (auth) => ({
				url: 'auth/login',
				method: 'POST',
				body: auth,
			}),
		}),
		profile: build.query<GetProfileResponse, void>({
			query: () => 'auth/profile',
		}),
		logout: build.query<void, void>({
			query: () => 'auth/logout',
		}),
		getRefreshToken: build.query<GetLoginResponse, void>({
			query: () => 'auth/refresh',
		}),
	}),
});

export const { useAuthMutation, useProfileQuery, useLazyLogoutQuery, useLazyGetRefreshTokenQuery } =
	authApi;
