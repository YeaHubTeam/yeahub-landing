import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginPageSliceTypes } from './types/loginPageSliceTypes';

const loginPageSlice = createSlice({
	name: 'auth',
	initialState: {
		access_token: localStorage.getItem('accessToken') || '',
	},
	reducers: {
		setUserData: (state, action: PayloadAction<LoginPageSliceTypes>) => {
			const { access_token } = action.payload;
			state.access_token = access_token;
			localStorage.setItem('accessToken', access_token);
		},
		logOut: (state) => {
			state.access_token = '';
			localStorage.removeItem('accessToken');
		},
	},
});

export const { reducer: loginPageReducer, actions: loginPageActions } = loginPageSlice;
