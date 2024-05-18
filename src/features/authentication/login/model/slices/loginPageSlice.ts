import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResponseData } from '../../api/loginApi';

import { LoginPageSliceTypes } from './types/loginPageSliceTypes';


const loginPageSlice = createSlice({
	name: 'auth',
	initialState: {
		accessToken: localStorage.getItem('accessToken') || '',
		error: null,
	} as LoginPageSliceTypes,
	reducers: {
		setUserData: (state, action: PayloadAction<ResponseData>) => {
			const accessToken = action.payload.access_token;
			state.accessToken = accessToken;
			localStorage.setItem('accessToken', accessToken);
		},
		logOut: (state) => {
			state.accessToken = '';
			localStorage.removeItem('accessToken');
		},
		catchError: (state, action: PayloadAction<number>) => {
			state.error = action.payload;
		},
	},
});

export const { reducer: loginPageReducer, actions: loginPageActions } = loginPageSlice;
