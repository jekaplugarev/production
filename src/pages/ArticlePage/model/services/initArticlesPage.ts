import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';
import { articlesPageInited } from '../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articleDetails/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { dispatch, getState } = thunkApi;

            const inited = articlesPageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');

                if (orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
