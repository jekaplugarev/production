import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const articlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;

export const articlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const articlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;

export const articlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;

export const articlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;

export const articlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export const articlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
