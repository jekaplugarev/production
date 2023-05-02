import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('counter', () => {
        componentRender(Counter, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('counter increment', () => {
        componentRender(Counter, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('counter decrement', () => {
        componentRender(Counter, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
