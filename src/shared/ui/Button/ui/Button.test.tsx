import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
    test('Button render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Button theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
