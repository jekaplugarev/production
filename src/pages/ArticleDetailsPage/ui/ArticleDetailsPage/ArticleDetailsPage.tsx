import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        sdf
    </div>
);

export default memo(ArticleDetailsPage);
