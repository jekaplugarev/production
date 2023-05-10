import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState Test', () => {
    test('should return selector', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };

        expect(getLoginState(state)).toEqual({ error: 'error' });
    });
});
