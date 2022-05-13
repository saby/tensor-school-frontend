import {render, fireEvent} from "@testing-library/react";
import App from './App';

describe('JSX', () => {
    it('Неупорядоченный красный список с большими буквами', () => {
        const {container} = render(<App/>);

        expect(container).toMatchSnapshot();
    });

    describe('Переключение стиля списка', () => {
        it('Упорядоченный список', () => {
            const {queryByTestId, container} = render(<App/>);

            const listTypeToggle = queryByTestId('listType') as HTMLElement;
            fireEvent.click(listTypeToggle);

            expect(container).toMatchSnapshot();
        });
    });

    describe('Переключение размера шрифта', () => {
        it('Маленький шрифт', () => {
            const {queryByTestId, container} = render(<App/>);

            const fontToggle = queryByTestId('fontSize') as HTMLElement;
            fireEvent.click(fontToggle);

            expect(container).toMatchSnapshot();
        });
    });

    describe('Переключение цвета', () => {
        it('Фиолетовый', () => {
            const {queryByTestId, container} = render(<App/>);

            const colorToggle = queryByTestId('color') as HTMLElement;
            fireEvent.click(colorToggle);

            expect(container).toMatchSnapshot();
        });
    });
});
