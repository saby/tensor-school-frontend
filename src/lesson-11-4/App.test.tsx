import App from './App'
import {fireEvent, render} from '@testing-library/react';

function iterateSort(sortControl: HTMLElement, container: HTMLElement): void {
    for (let i = 0; i < 3; i++) {
        fireEvent.click(sortControl);
        expect(container).toMatchSnapshot();
    }
}

describe('VDOM', () => {
    it('Верстка по умолчанию', () => {
        const {container} = render(<App/>);
        expect(container).toMatchSnapshot();
    })

    it('Проверка поиска', () => {
        const {container, getByTestId} = render(<App/>);

        const search = getByTestId('search');

        fireEvent.change(search, { target: { value: 'х' }});
        expect(container).toMatchSnapshot();

        fireEvent.change(search, { target: { value: 'п' }});
        expect(container).toMatchSnapshot();

        fireEvent.change(search, { target: { value: 'a' }});
        expect(container).toMatchSnapshot();

        fireEvent.change(search, { target: { value: ''}});
        expect(container).toMatchSnapshot();
    })

    it('Проверка сортировки по названию', () => {
        const {container, getByTestId} = render(<App/>);

        const name = getByTestId('name');

        iterateSort(name, container);
    })

    it('Проверка сортировки по дате', () => {
        const {container, getByTestId} = render(<App/>);

        const date = getByTestId('date');

        iterateSort(date, container);
    })

    it('Проверка сортировки по цене', () => {
        const {container, getByTestId} = render(<App/>);

        const cost = getByTestId('cost');

        iterateSort(cost, container);
    })

    it('Проверка поиска с сортировкой', () => {
        const {container, getByTestId} = render(<App/>);

        const cost = getByTestId('cost');
        const date = getByTestId('date');
        const name = getByTestId('name');
        const search = getByTestId('search');

        fireEvent.change(search, { target: { value: 'хо' }});
        [cost, date, name].forEach((sort) => {
            iterateSort(sort, container);
        })

        fireEvent.change(search, {target: { value: ''}});
        expect(container).toMatchSnapshot();
    })
})
