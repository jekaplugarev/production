import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Text';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack
                role="navigation"
                gap="8"
                className={cls.items}
            >
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </section>
    );
});
