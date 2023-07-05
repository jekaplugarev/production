import { StateSchema } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/app/providers/StoreProvider';
import { Country } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Country';
import { Currency } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
