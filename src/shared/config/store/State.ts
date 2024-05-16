/* eslint-disable @conarti/feature-sliced/layers-slices */

import { LoginPageSliceTypes } from '@/pages/LoginPage';

import { baseApi } from '../api/baseApi';

export interface State {
	auth: LoginPageSliceTypes;
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
