import {
    ChangeEvent, CSSProperties, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps) => {
    const optionsList = useMemo(() => options?.map((item) => (
        <option
            className={cls.option}
            key={item.value}
            value={item.value}
        >
            {item.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label} >`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});

export default Select;
