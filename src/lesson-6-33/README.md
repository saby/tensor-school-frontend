# Классы

### Задание 1

Определите класс `User` в строчке *, который будет создавать экземляры типа `TUser`.
Независимо от переданных параметров в конструктор, объекты должны соответствовать `TUser`.

~~~ TypeScript
type IUser = {
   name: string;
   age: number;
}

export class User {}; // *
~~~

### Задание 2

Напишите конструктор класса `Rectangle` задав для параметров начальные значения,
при этом `width` и `height` должны быть больше `0`;

```TypeScript
export class Rectangle {
   width: number;
   height: number;

   constructor(width: number, height: number) {
      //
   }
}
```

### Задание 3

Дан класс `Counter`, в конструктор которого можно передать начальное значение `start`.
Необходимо описать `constructor` и методы:
- `increment` — увеличивает `counter` на 1 и возвращает результат,
- `increment` — уменьшает `counter` на 1 и возвращает результат.

```TypeScript
const START_COUNTER = 0;
export class Counter {
   counter: number;

   constructor(start: number = START_COUNTER) {
      //
   }

   increment(): number {
      //
   }

   decrement(): number {
      //
   }
}
```
