import { classNames } from '../../Downloads/production-project-b5e9ed2f2c5cd140743e83f60254c97855695e28/src/shared/lib/classNames/classNames';
import { Loader } from '../../Downloads/production-project-b5e9ed2f2c5cd140743e83f60254c97855695e28/src/shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
