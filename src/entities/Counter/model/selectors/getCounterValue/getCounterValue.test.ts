import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
