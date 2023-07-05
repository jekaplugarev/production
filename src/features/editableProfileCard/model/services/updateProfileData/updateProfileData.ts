import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/app/providers/StoreProvider';
import { Profile } from '../../Downloads/production-project-544bed01805b06c643ba9080f7b8fc3393f75fab/src/entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${formData?.id}`,
                    formData,
                );

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
