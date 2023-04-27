import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => setIsOpen(false), []);
    const onShowModal = useCallback(() => setIsOpen(true), []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;
