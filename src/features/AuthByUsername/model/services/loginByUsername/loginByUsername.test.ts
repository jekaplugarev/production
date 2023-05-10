import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername Test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    test('Success login', async () => {
        const userValue = { username: '123', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({
            data: userValue,
        }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(result.meta.requestStatus).toBe('fulfilled');

        // const action = loginByUsername({ username: '123', password: '123' });
        // const result = await action(dispatch, getState, undefined);
        //
        // expect(mockedAxios.post).toHaveBeenCalled();
        // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        // expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
