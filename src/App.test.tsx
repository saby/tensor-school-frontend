import {render, fireEvent} from "@testing-library/react";
import App from './App';

it('check base render', () => {
    const {queryByTestId} = render(<App/>);

    const buttons = queryByTestId('buttons');
    expect(buttons).toBeTruthy();
    expect(buttons?.children.length).toEqual(3);
    expect(buttons?.textContent).toMatch('Хочу цифры')
    expect(buttons?.textContent).toMatch('Хочу фиолетовый')
    expect(buttons?.textContent).toMatch('Хочу маленькие')
})

function checkListItems(list: HTMLElement): void {
    const {children} = list;
    const [watch, back, buy, beatuful] = Array.from(children);
    expect(children.length).toBe(4);
    expect(watch.textContent).toMatch('Посмотреть вокруг');
    expect(back.textContent).toMatch('Оглянуться назад');
    expect(buy.textContent).toMatch('Рыбов купить');
    expect(beatuful.textContent).toMatch('"Красивое" сказать');
}

describe('toggle list', () => {
    it('check unordered list', () => {
        const {queryByTestId} = render(<App/>);

        const listContainer = queryByTestId('list');
        const list = listContainer?.querySelector('UL') as HTMLElement;
        expect(list).toBeTruthy();
        checkListItems(list);
    })

    it('check ordered list', () => {
        const {queryByTestId} = render(<App/>);

        const listTypeToggle = queryByTestId('listType') as HTMLElement;
        const listContainer = queryByTestId('list');
        fireEvent.click(listTypeToggle);

        const list = listContainer?.querySelector('OL') as HTMLElement;
        expect(list).toBeTruthy();
        checkListItems(list);
    })
})

describe('toggle font size', () => {
    it('check big font', () => {
        const {queryByTestId} = render(<App/>);
        const listContainer = queryByTestId('list') as HTMLElement;
        expect(listContainer).toBeTruthy();
        expect(listContainer).toHaveClass('App__list-big');
    })

    it('check small font', () => {
        const {queryByTestId} = render(<App/>);
        const listContainer = queryByTestId('list') as HTMLElement;
        expect(listContainer).toBeTruthy();

        const fontToggle = queryByTestId('fontSize') as HTMLElement;
        fireEvent.click(fontToggle);

        expect(listContainer).toHaveClass('App__list-small');
    })
})

describe('toggle color', () => {
    it('check red', () => {
        const {queryByTestId} = render(<App/>);
        const listContainer = queryByTestId('list') as HTMLElement;
        expect(listContainer).toBeTruthy();

        expect(listContainer).toHaveStyle('color: red;');
    })

    it('check violet', () => {
        const {queryByTestId} = render(<App/>);
        const listContainer = queryByTestId('list') as HTMLElement;
        expect(listContainer).toBeTruthy();

        const colorToggle = queryByTestId('color') as HTMLElement;
        fireEvent.click(colorToggle);

        expect(listContainer).toHaveStyle('color: violet;');
    })
})
