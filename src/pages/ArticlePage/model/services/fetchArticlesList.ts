import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    articlesPageLimit,
    articlesPageNum,
    articlesPageOrder,
    articlesPageSearch,
    articlesPageSort,
    articlesPageType,
} from '../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleId',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const limit = articlesPageLimit(getState());
            const sort = articlesPageSort(getState());
            const order = articlesPageOrder(getState());
            const search = articlesPageSearch(getState());
            const page = articlesPageNum(getState());
            const type = articlesPageType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
