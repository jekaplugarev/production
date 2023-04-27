// import { screen } from '@testing-library/react';
// import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { userEvent } from '@storybook/testing-library';
// import { User } from './Counter';
//
// describe('Counter', () => {
//     test('counter', () => {
//         componentRender(User, {
//             initialState: { counter: { value: 10 } },
//         });
//         expect(screen.getByTestId('value-title')).toHaveTextContent('10');
//     });
//
//     test('counter increment', () => {
//         componentRender(User, {
//             initialState: { counter: { value: 10 } },
//         });
//         userEvent.click(screen.getByTestId('increment'));
//         expect(screen.getByTestId('value-title')).toHaveTextContent('11');
//     });
//
//     test('counter decrement', () => {
//         componentRender(User, {
//             initialState: { counter: { value: 10 } },
//         });
//         userEvent.click(screen.getByTestId('decrement'));
//         expect(screen.getByTestId('value-title')).toHaveTextContent('9');
//     });
// });
