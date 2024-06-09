import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/config/api/baseApi';
import { State } from '@/shared/config/store/State';

import { authReducer } from '@/entities/authentication';
import { userReducer } from '@/entities/user';

import { router } from '../../router';

export const createReduxStore = (initialState?: State) => {
	const rootReducer: ReducersMapObject<State> = {
		user: userReducer,
		auth: authReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	};
	return configureStore<State>({
		reducer: rootReducer as unknown as typeof rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						navigate: router.navigate,
					},
				},
			}).concat(baseApi.middleware),
	});
};
