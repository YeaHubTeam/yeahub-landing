import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { deleteCookie } from '@/shared/libs/cookieHandlers';

import { UserSliceTypes } from './types/userSliceTypes';
import { PartialDataForUserSlice } from './types/userSliceTypes';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		error: null,
		user: {
			firstName: '',
			avatarURL: null,
		},
	} as UserSliceTypes,
	reducers: {
		setUserData: (state, action: PayloadAction<PartialDataForUserSlice>) => {
			const { avatarURL, firstName } = action.payload;
			state.user.avatarURL = avatarURL;
			state.user.firstName = firstName;
		},
		logOut: (state) => {
			state.user.avatarURL = null;
			state.user.firstName = '';
			localStorage.removeItem('accessToken');
			deleteCookie('access_token');
		},
		catchError: (state, action: PayloadAction<number>) => {
			state.error = action.payload;
		},
	},
});

export const { reducer: userReducer, actions: userActions } = userSlice;
