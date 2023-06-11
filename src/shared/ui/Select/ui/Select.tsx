import {
    ChangeEvent, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: string;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

const Select = <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps<T>) => {
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
        if (onChange) onChange?.(e.target.value as T);
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
};

export default memo(Select);
