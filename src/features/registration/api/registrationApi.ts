import { baseApi } from '@/shared/config/api/baseApi';

import { Registration } from '../model/types/registration';

export interface ResponseData {
	access_token: string;
	refresh_token: string;
}

export const registrationApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		registration: build.mutation<ResponseData, Registration>({
			query: (registration) => ({
				url: 'auth/signUp',
				method: 'POST',
				body: registration,
			}),
		}),
	}),
});

export const { useRegistrationMutation } = registrationApi;
