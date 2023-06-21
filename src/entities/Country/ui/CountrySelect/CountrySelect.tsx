import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA },
    { value: Country.GBR, content: Country.GBR },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Страна')}
            label={t('Страна')}
            readonly={readonly}
            direction="top right"
        />
    );
});

export default CountrySelect;
