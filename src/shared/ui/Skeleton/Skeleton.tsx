import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    borderRadius?: string;
}

const Skeleton = memo(({
    className,
    height,
    width,
    borderRadius,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});

export default Skeleton;
