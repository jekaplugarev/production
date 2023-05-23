import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block?: ArticleTextBlock;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className, block }) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block?.title && (
            <Text title={block.title} className={cls.title} />
        )}
        {block?.paragraphs.map((paragraph, index) => (
            <Text
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
            />
        ))}
    </div>
);

export default memo(ArticleTextBlockComponent);
