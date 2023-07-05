import { userActions } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/User';
import { TestAsyncThunk } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Country';
import { Currency } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
