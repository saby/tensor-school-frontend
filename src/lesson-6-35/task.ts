type TPhone = string | undefined;

export interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

export interface IStudentData extends IPersonData {
    phone: TPhone;
}

export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;

    //solution_begin
    constructor(data: IPersonData) {
        this._name = data.name;
        this._secondName = data.secondName;
        this._age = data.age;
    }

    getData(): IPersonData {
        return {
            name: this._name,
            secondName: this._secondName,
            age: this._age
        }
    }
    //solution_end
}

export class Student extends Person {
    readonly _phone: string | null;

    //solution_begin
    constructor(data: IStudentData) {
        super(data);
        this._phone = data.phone !== undefined ? data.phone : null;
    }

    getData(): IStudentData {
        return {...super.getData(), phone: this._phone || undefined};
    }
    //solution_end
}