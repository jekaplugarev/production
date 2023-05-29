import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData';
import { getAddCommentFormText } from 'features/addCommentForm/model/selectors/addCommentFormSelectors';
import { addCommentFormActions } from 'features/addCommentForm/model/slices/addCommentFormSlice';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>>(
        'addCommentForm/sendComment',
        async (authData, {
            dispatch, extra, rejectWithValue, getState,
        }) => {
            const userData = getUserAuthData(getState());
            const text = getAddCommentFormText(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('No data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(addCommentFormActions.setText(''));

                return response.data;
            } catch (error) {
                return rejectWithValue('Error');
            }
        },
    );
