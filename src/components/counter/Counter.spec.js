
import { render, screen } from '@testing-library/react';
import { Counter } from './Counter'
import { act } from 'react-dom/test-utils';
describe('src/components/counter/Counter.js', () => {
    describe (`<Counter/>`, () => {
        it('should render correctly', () => {
            screen.getByTestId('counter');
            const countValue = screen.getByTestId('count-value');
            expect(countValue.innerHTML).toBe('0')

        })
        it('should increment counter by + when increment button clicked', () => {
            render(<Counter/>);
            screen.getByTestId('counter');
            const buttonIncrement = screen.getByTestId('button-increment');
            act(() => {
                buttonIncrement.click();
            })
            const countValue = screen.getByTestId('count-value');
            expect(countValue.innerHTML).toBe('1')
        })
        it('should not increment when increment button clicked more than 10 times', () => {
            render(<Counter/>);
            screen.getByTestId('button-increment');
            act(() => {
                for(let i = 0; i < 10; i++) {
                buttonIncrement.click();
                }
            })
            const countValue = screen.getByTestId('count-value');
            expect(countValue.innerHTML).toBe('1')
        })
    })
})