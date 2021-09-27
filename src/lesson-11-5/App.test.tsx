import App from './App';
import {fireEvent, render} from '@testing-library/react';

describe('Events', () => {
    it('Рендер по умолчанию', () => {
        const {container} = render(<App/>);
        expect(container).toMatchSnapshot();
    })

    it('Корректный ввод в поле', async () => {
        const {getByTestId} = render(<App/>);
        const input = getByTestId('input') as HTMLInputElement;
        const result = getByTestId('result');

        // -0.1+0.2
        fireEvent.change(input, { target: { value: '--0.+1+0..2' }});

        fireEvent.keyPress(input,  {key: 'Enter', code: 'Enter', charCode: 13});

        expect(input).toMatchSnapshot();
        expect(result).toMatchSnapshot();
    })

    it('Работают все кнопки', () => {
        const {getByTestId} = render(<App/>);
        const keyboard = getByTestId('keyboard') as HTMLElement;
        const {children} = keyboard;
        const input = getByTestId('input');
        const result = getByTestId('result');

        // нажать все кнопки до 0.
        for (let i = 0; i < 14; i++) {
            fireEvent.click(children[i])
        }
        // 2
        fireEvent.click(children[9])
        // +
        fireEvent.click(children[15])
        fireEvent.click(children[9])
        // =
        fireEvent.click(children[14]);

        expect(input).toMatchSnapshot();
        // сравним только несколько первых цифр
        const mathResult = '214.62236842'
        expect(result.innerHTML.slice(0, mathResult.length)).toMatch(mathResult);
    })

    it('Правильно считает', () => {
        const {getByTestId} = render(<App/>);
        const input = getByTestId('input');
        const result = getByTestId('result');

        fireEvent.change(input, { target: { value: '0.1+0.2='}});

        expect(input).toMatchSnapshot();
        expect(result).toMatchSnapshot();
    })

    it('Приоритеты расставлены', () => {
        const {getByTestId} = render(<App/>);
        const input = getByTestId('input');
        const result = getByTestId('result');

        for (const low of ['+', '-']) {
            for (const high of ['*', '/']) {
                fireEvent.change(input, { target: { value: `2${low}2${high}2=` }});
                expect(result).toMatchSnapshot();
            }
        }
    })
})
