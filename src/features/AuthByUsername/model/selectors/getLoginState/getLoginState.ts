import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const getLoginState = (state: DeepPartial<StateSchema>) => state?.loginForm;
