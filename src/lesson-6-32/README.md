# TypeScript. Типы данных

### Задача 1

Напишите функцию `getUsers`, возвращающую необходимые данные.

```TypeScript
type TUser = {
   name: string;
   age: number,
   gender: 'male' | 'famale'
};

function getUsers(): TUser[] {
   //...
}
```

### Задача 2

Напишите функцию `userToString` так, чтобы она возвращала информацию о пользователе или сотруднике в формате:
    - для пользователя - `Имя: string, Возраст: number, Пол: женский/мужской`
    - для сотрудника - `Имя: string, Возраст: number, Пол: 'женский' | 'мужской', Компания: string`

```TypeScript
type TUser = {
   name: string;
   age: number,
   gender: 'male' | 'famale'
};

type TEmployee = TUser & {company?: string};

function personToString(person: TEmployee | TUser): string {
   //
}
```

### Задача 3
У нас есть массив объектов c типом `TFigure`, которые могут описывать прямоугольник `rectangle`  или прямой треугольник `rightTriangle`.
Необходимо написать функцию `calcSquare`, которая будет высчитывать площадь фигуры.

```TypeScript
type TKind = 'rectangle' | 'rightTriangle';

type TFigure = {
   type: TKind;
   width: number;
   height: number;
}

type TCalcFunc = (figure: TFigure) => number;

export const calcSquare: TCalcFunc = (figure) = 
```
