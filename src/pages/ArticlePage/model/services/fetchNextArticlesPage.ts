import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';
import {
    articlesPageHasMore, articlesPageIsLoading,
    articlesPageNum,
} from '../selectors/articlesPageSelectors';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articleDetails/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { dispatch, getState } = thunkApi;

            const page = articlesPageNum(getState());
            const isLoading = articlesPageIsLoading(getState());
            const hasMore = articlesPageHasMore(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
