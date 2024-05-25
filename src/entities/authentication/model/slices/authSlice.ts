import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResponseData } from '../../api/authApi';

import { AuthSliceTypes } from './types/authSliceTypes';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		accessToken: localStorage.getItem('accessToken') || '',
		error: null,
	} as AuthSliceTypes,
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

export const { reducer: authReducer, actions: authActions } = authSlice;
