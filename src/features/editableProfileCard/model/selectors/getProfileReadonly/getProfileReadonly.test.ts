import { StateSchema } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
