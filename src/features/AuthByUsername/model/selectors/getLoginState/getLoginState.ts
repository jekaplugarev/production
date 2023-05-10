import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (state: DeepPartial<StateSchema>) => state?.loginForm || {};
