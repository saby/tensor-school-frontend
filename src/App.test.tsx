import {render, fireEvent} from "@testing-library/react";
import App from './App';

describe('toggle list', () => {
    it('check unordered list', () => {
        const {container} = render(<App/>);

        expect(container).toMatchSnapshot();
    })

    it('check ordered list', () => {
        const {queryByTestId, container} = render(<App/>);

        const listTypeToggle = queryByTestId('listType') as HTMLElement;
        fireEvent.click(listTypeToggle);

        expect(container).toMatchSnapshot();
    })
})

describe('toggle font size', () => {
    it('check small font', () => {
        const {queryByTestId, container} = render(<App/>);

        const fontToggle = queryByTestId('fontSize') as HTMLElement;
        fireEvent.click(fontToggle);

        expect(container).toMatchSnapshot();
    })
})

describe('toggle color', () => {
    it('check violet', () => {
        const {queryByTestId, container} = render(<App/>);

        const colorToggle = queryByTestId('color') as HTMLElement;
        fireEvent.click(colorToggle);

        expect(container).toMatchSnapshot();
    })
})
