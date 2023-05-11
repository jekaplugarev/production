import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                    onClick={onCancelEdit}
                >
                    {t('Отменить')}
                </Button>
            )}
        </div>
    );
};