/* eslint-disable @conarti/feature-sliced/layers-slices */

import { AuthSliceTypes } from '@/entities/authentication';
import { UserSliceTypes } from '@/entities/user';

import { baseApi } from '../api/baseApi';

export interface State {
	user: UserSliceTypes;
	auth: AuthSliceTypes;
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>;
}
