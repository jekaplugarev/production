import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage: FC<ArticlePageProps> = ({ className }) => (
    <div className={classNames(cls.ArticlePage, {}, [className])}>
        sdf
    </div>
);

export default memo(ArticlePage);
