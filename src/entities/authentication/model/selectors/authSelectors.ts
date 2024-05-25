import { State } from '@/shared/config/store/State';

export const getAuthError = (state: State) => state.auth.error;
