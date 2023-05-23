import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = ({ className, Svg }) => (
    <Svg
        className={classNames(cls.Icon, {}, [className])}
    />
);

export default Icon;
