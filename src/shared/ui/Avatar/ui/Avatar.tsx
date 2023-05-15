import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

const Avatar = memo(({
    className,
    src,
    alt,
    size,
}: AvatarProps) => {
    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={style}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
});

export default Avatar;
