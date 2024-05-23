import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/config/api/baseApi';
import { State } from '@/shared/config/store/State';

import { loginPageReducer } from '@/entities/authentication';

export const createReduxStore = (initialState?: State) => {
	const rootReducer: ReducersMapObject<State> = {
		auth: loginPageReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	};
	return configureStore<State>({
		reducer: rootReducer as unknown as typeof rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
	});
};