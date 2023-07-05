import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    articlesPageError,
    articlesPageIsLoading,
    articlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesPageIsLoading);
    const view = useSelector(articlesPageView);
    const error = useSelector(articlesPageError);

    const { t } = useTranslation();

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
