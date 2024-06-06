import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GetLoginResponse, GetProfileResponse } from '../../api/authApi';

import { AuthSliceTypes } from './types/authSliceTypes';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		accessToken: localStorage.getItem('accessToken') || '',
		user: null,
		error: null,
	} as AuthSliceTypes,
	reducers: {
		setUserData: (state, action: PayloadAction<GetProfileResponse>) => {
			state.user = action.payload;
			state.error = null;
		},
		setAccessToken: (state, action: PayloadAction<GetLoginResponse>) => {
			const accessToken = action.payload.access_token;
			state.accessToken = accessToken;
			localStorage.setItem('accessToken', accessToken);
		},
		logOut: (state) => {
			state.accessToken = '';
			state.user = null;
			localStorage.removeItem('accessToken');
		},
		catchError: (state, action: PayloadAction<number>) => {
			state.error = action.payload;
		},
	},
});

export const { reducer: authReducer, actions: authActions } = authSlice;
