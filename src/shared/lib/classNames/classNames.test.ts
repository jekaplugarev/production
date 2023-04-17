import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClassName'))
            .toBe('someClassName');
    });

    test('with additional class', () => {
        expect(classNames('someClassName', {}, ['class']))
            .toBe('someClassName class');
    });

    test('with mods', () => {
        expect(classNames('someClassName', {
            hovered: true,
        }, ['class'])).toBe('someClassName class hovered');
    });

    test('with mods false', () => {
        expect(classNames('someClassName', {
            hovered: true,
            scroll: false,
        }, ['class']))
            .toBe('someClassName class hovered');
    });

    test('with mods false', () => {
        expect(classNames('someClassName', {
            hovered: true,
            scroll: undefined,
        }, ['class']))
            .toBe('someClassName class hovered');
    });
});
