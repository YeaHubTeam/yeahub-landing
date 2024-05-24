import { State } from '@/shared/config/store/State';

export const getLoginError = (state: State) => state.auth.error;
