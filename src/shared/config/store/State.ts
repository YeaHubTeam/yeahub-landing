/* eslint-disable @conarti/feature-sliced/layers-slices */

import { AuthSliceTypes } from '@/entities/authentication';

import { baseApi } from '../api/baseApi';

export interface State {
	auth: AuthSliceTypes;
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
