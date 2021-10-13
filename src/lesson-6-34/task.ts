// Задание 1. Начало
export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

export function getPerson(): Person {
    const data = {
        name: 'Petr',
        secondName: 'Smith',
        age: 7 //solution_line
        /* //solution_line
        age: '7'
        */ //solution_line
    };
    return new Person(data);
}
// Задание 1. Конец

// Задание 2. Начало
type TPhone = string | undefined;

export interface IStudentData {
    name: string;
    secondName: string;
    age: number;
    phone: TPhone;
}

export function getStudentsData(): IStudentData[] {
    /**
     * Данные студентов которые нужно передать:
     *
     * 1. Ivan Petrov 20 лет +7(555)555-55-50
     * 2. Stepan Petrov 19 лет +7(555)555-55-51
     * 3. Petr Ivanov 19 лет
     *
     */
    //solution_begin
    return [
        {
            name: 'Ivan',
            secondName: 'Petrov',
            age: 20,
            phone: '+7(555)555-55-50'
        },
        {
            name: 'Stepan',
            secondName: 'Petrov',
            age: 19,
            phone: '+7(555)555-55-51'
        },
        {
            name: 'Petr',
            secondName: 'Ivanov',
            age: 19,
            phone: undefined
        }
    ]
    //solution_end
}
// Задание 2. Конец

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    constructor(data: IPersonData) {
        this._name = data.name;
        this._secondName = data.secondName;
        this._age = data.age;
    }

    greet(): string {
        return `Hi! I'm ${this._name} ${this._secondName}. I'm ${this._age}`;
    }
}
