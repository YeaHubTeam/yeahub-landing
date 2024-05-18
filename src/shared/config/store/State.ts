/* eslint-disable @conarti/feature-sliced/layers-slices */

import { LoginPageSliceTypes } from '@/features/authentication/login';

import { baseApi } from '../api/baseApi';

export interface State {
	auth: LoginPageSliceTypes;
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
