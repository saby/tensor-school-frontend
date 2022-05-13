import {fireEvent, render} from "@testing-library/react";
import {IUserContext, IUserData, UserContext} from "./UserContext";
import User from "./User";

function renderTestContext(customContext?: Partial<IUserContext>) {
    let context: IUserContext = {
        about: "человек",
        birthdate: new Date(1997, 5, 13),
        books: "дюна",
        email: "myemail@mail.com",
        films: "дюна",
        firstName: "Иванов",
        games: "Ведьмак",
        gender: 'мужской',
        hobby: "реверс-инжиниринг",
        lastName: "Иван",
        location: "г. Ярославль",
        music: "mood music",
        patronym: "Иванович",
        phone: "+701234567890",
        school: {
            name: '322',
            address: 'Ярославль, ул. Пушкина д. Колотушкина',
            startDate: new Date(2004, 8),
            finishDate: new Date(2015, 4)
        },
        university: {
            name: 'ЯрГУ им.П.Г.Демидова',
            address: 'Ярославль, ул. Союзная 144',
            startDate: new Date(2015, 8),
            finishDate: new Date(2019, 7, 31),
            specialization: 'Компьютерные науки'
        },
        work: "Тензор",
        updateUser(updateUserData: Partial<IUserData>): void {
            context = { ...context, ...updateUserData };
            rerender(<UserContext.Provider value={context}>
                <User/>
            </UserContext.Provider>);
        },
        ...customContext
    }
    const result = render(
        <UserContext.Provider value={context}>
            <User/>
        </UserContext.Provider>
    )
    const {rerender} = result;

    return result
}

describe('Context', () => {
    it('Вкладка по умолчанию - Контакты', () => {
        const {container} = renderTestContext();
        expect(container).toMatchSnapshot();
    })

    it('Вкладка Интересы', () => {
        const {container, getByText} = renderTestContext();
        fireEvent.click(getByText('Интересы'));
        expect(container).toMatchSnapshot();
    })

    it('Вкладка Образование', () => {
        const {container, getByText} = renderTestContext();
        fireEvent.click(getByText('Образование'));
        expect(container).toMatchSnapshot();
    })

    it('Меняем контакты', () => {
        const {container, getByText} = renderTestContext();

        const matchInput = (id: string, action?: (input: Element) => void) => {
            const input = container.querySelector(`[data-id="${id}"]`) as Element;
            action && action(input);
            expect(input).toMatchSnapshot();
        }

        matchInput('phone', (input) =>
            fireEvent.change(input, { target: { value: '+79876543210' }}));

        matchInput('email', (input) =>
            fireEvent.change(input, { target: { value: 'not_my@email.com' }}));

        matchInput('location', (input) =>
            fireEvent.change(input, { target: { value: 'где-то' }}));

        fireEvent.click(getByText('Образование'));
        fireEvent.click(getByText('Контакты'));

        ['phone', 'email', 'location'].forEach((id) => matchInput(id));
    })

    it('Меняем интересы', () => {
        const {container, getByText} = renderTestContext();
        fireEvent.click(getByText('Интересы'));

        const matchInput = (id: string, action?: (input: Element) => void) => {
            const input = container.querySelector(`[data-id="${id}"]`) as Element;
            action && action(input);
            expect(input).toMatchSnapshot();
        }

        ['work', 'hobby', 'music', 'films', 'books', 'games', 'about'].forEach((id) =>
            matchInput(id, (input) =>
                fireEvent.change(input, { target: { value: '' }})
            )
        );

        fireEvent.click(getByText('Контакты'));
        fireEvent.click(getByText('Интересы'));

        ['work', 'hobby', 'music', 'films', 'books', 'games', 'about'].forEach((id) =>
            matchInput(id)
        );
    });

    it('Меняем образование', () => {
        const {container, getByText} = renderTestContext();
        fireEvent.click(getByText('Образование'));

        const matchInput = (id: string, action?: (input: NodeListOf<Element>) => void) => {
            const inputs = container.querySelectorAll(`[data-id="${id}"]`);
            action && action(inputs);
            expect(inputs).toMatchSnapshot();
        }

        ['name', 'address', 'startDate', 'finishDate', 'specialization'].forEach((id) =>
            matchInput(id, (inputs) =>
                inputs.forEach((input) => fireEvent.change(input, { target: { value: '' }}))
            )
        );

        fireEvent.click(getByText('Контакты'));
        fireEvent.click(getByText('Образование'));

        ['name', 'address', 'startDate', 'finishDate', 'specialization'].forEach((id) =>
            matchInput(id)
        );
    })
});
