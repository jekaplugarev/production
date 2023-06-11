import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { ArticleViewSelector } from 'shared/ui/ArticleViewSelector/ArticleViewSelector';
import { Page } from 'widgets/Page/Page';

import { articlesPageActions } from 'pages/ArticlePage/model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import ArticleSortSelector from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from 'entities/ArticleTypeTabs/ArticleTypeTabs';
import {
    articlesPageOrder, articlesPageSearch,
    articlesPageSort, articlesPageType,
    articlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

const ArticlesPageFilters: FC<ArticlePageFiltersProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const view = useSelector(articlesPageView);
    const sort = useSelector(articlesPageSort);
    const order = useSelector(articlesPageOrder);
    const search = useSelector(articlesPageSearch);
    const type = useSelector(articlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(() => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch, view]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    return (
        <Page
            className={classNames(cls.ArticlePageFilters, {}, [className])}
        >
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </Page>
    );
};

export default memo(ArticlesPageFilters);
