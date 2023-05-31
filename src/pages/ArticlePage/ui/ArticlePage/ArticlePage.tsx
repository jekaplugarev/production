import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => (
    <div className={classNames(cls.ArticlePage, {}, [className])}>
        <ArticleList
            isLoading
            view={ArticleView.BIG}
            articles={[]}
        />
    </div>
);

export default memo(ArticlePage);
