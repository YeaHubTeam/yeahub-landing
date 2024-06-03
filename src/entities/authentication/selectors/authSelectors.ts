import { State } from '@/shared/config/store/State';

export const getAuthData = (state: State) => state.auth.user;
