# Модификаторы доступа

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
1. Верните результатом функции `readonly_test` имена всех полей запись в которые доступна только в конструкторе
```TypeScript
export function readonly_test(): string[] {
    return ['field1', 'field2', 'methodOne', 'methodTwo'];
};
```
2. Верните результатом функции `private_test` имена всех полей и методов которые доступны только внутри класса
```TypeScript
export function private_test(): string[] {
    return ['field1', 'field2', 'methodOne', 'methodTwo'];
};
```
3. Верните результатом функции `protected_test` имена всех полей и методов которые доступны в классах наследниках
```TypeScript
export function protected_test(): string[] {
    return ['field1', 'field2', 'methodOne', 'methodTwo'];
};
```
4. Верните результатом функции `public_test` имена всех полей и методов которые доступны везде
```TypeScript
export function public_test(): string[] {
    return ['field1', 'field2', 'methodOne', 'methodTwo'];
};
```