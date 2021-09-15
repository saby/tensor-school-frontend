# Методы доступа get и set

Методы get и set в русском языке часто именуются как геттер и сеттер.
В TypeScript применяются для контроля доступа к полям класса, валидации и форматирования значения поля.

```TypeScript
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

 
    // Сеттер и геттер доступны только из наследников, само поле приватное
    protected get age(): number {
        return this._age;
    }

    protected set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    // Примеры использования сеттеров и геттеров для валидации
    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    
    // Форматирование ввода и вывода
    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length !== 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
```
