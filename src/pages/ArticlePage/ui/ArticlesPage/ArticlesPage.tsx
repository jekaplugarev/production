import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'shared/ui/ArticleViewSelector/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { PageError } from 'widgets/PageError';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import {
    articlesPageError,
    articlesPageIsLoading,
    articlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesPageIsLoading);
    const error = useSelector(articlesPageError);
    const view = useSelector(articlesPageView);

    const onChangeView = useCallback(() => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch, view]);

    const onLoadNextPart = useCallback(() => {
        dispatch((fetchNextArticlesPage()));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    if (error) {
        return (
            <Page
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <PageError />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlePage, {}, [className])}
            >
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
