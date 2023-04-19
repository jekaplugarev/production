import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

const AppRouter: FC = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Loading...')}</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <Suspense fallback={<div>{t('Loading...')}</div>}>
                                    <div className="page-wrapper">
                                        {element}
                                    </div>
                                </Suspense>
                            )}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
