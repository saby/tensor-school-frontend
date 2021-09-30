# Наследование

1. Напишите конструкторы для классов `Person` и `Student`
```TypeScript
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
}

export class Student extends Person {
    readonly _phone: string | null;
}
```

2. Дополните классы `Person` и `Student` методами `getData` с возвращаемыми значениями по интерфейсам `IPersonData` и `IStudentData` соответственно
