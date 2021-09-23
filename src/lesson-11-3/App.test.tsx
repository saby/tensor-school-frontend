import App from './App';
import {act, fireEvent, render} from '@testing-library/react';

afterEach(() => {
    jest.useRealTimers();
})
describe('Render', () => {
    it('Проверка верстки по умолчанию', () => {
        const {container} = render(<App/>);

        expect(container).toMatchSnapshot();
    })

    it('Проверка стандартной задержки в 1 сек', () => {
        jest.useFakeTimers();
        const {container} = render(<App/>);

        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        act(() => {
            jest.advanceTimersByTime(1000);
        })

        expect(container).toMatchSnapshot();
    })


    it('Проверка изменения задержки', () => {
        jest.useFakeTimers();
        const {container, getByTestId} = render(<App/>);

        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        const input = getByTestId('input');
        fireEvent.change(input, {target: {value: '500'}})

        expect(clearInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenCalledTimes(2);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 500);

        act(() => {
            jest.advanceTimersByTime(500);
        })
        expect(container).toMatchSnapshot();
    })

    it('Проверка сброса счетчика', () => {
        jest.useFakeTimers();
        const {container, getByTestId} = render(<App/>);

        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        act(() => {
            jest.advanceTimersByTime(1000);
        })

        expect(container).toMatchSnapshot();

        const reset = getByTestId('reset');
        fireEvent.click(reset);

        expect(container).toMatchSnapshot();
    })
})
