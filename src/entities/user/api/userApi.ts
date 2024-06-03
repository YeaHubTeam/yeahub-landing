// import { baseApi } from '@/shared/config/api/baseApi';

// import { User } from '../model/types/user';

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

// export const userApi = baseApi.injectEndpoints({
// 	endpoints: (build) => ({
// 		user: build.query<User, null>({
// 			query: () => 'auth/profile',
// 		}),
// 		logout: build.query({
// 			query: () => 'auth/logout',
// 		}),
// 		getRefreshToken: build.query<ResponseData, null>({
// 			query: () => 'auth/refresh',
// 		}),
// 	}),
// });

// export const { useUserQuery, useLazyLogoutQuery, useLazyGetRefreshTokenQuery } = userApi;
