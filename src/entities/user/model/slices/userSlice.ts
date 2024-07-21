import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../types/user';

import { UserSliceTypes } from './types/userSliceTypes';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		error: null,
		user: {
			firstName: '',
			avatarUrl: null,
		},
	} as UserSliceTypes,
	reducers: {
		setUserData: (state, action: PayloadAction<User>) => {
			const { avatarUrl, firstName } = action.payload;
			state.user.avatarUrl = avatarUrl;
			state.user.firstName = firstName;
		},
		logOut: (state) => {
			state.user.avatarUrl = null;
			state.user.firstName = '';
			localStorage.removeItem('accessToken');
		},
		catchError: (state, action: PayloadAction<number>) => {
			state.error = action.payload;
		},
	},
});

export const { reducer: userReducer, actions: userActions } = userSlice;
