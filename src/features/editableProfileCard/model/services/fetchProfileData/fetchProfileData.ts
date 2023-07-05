import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/app/providers/StoreProvider';
import { Profile } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (profileId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Profile>(`/profile/${profileId}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
