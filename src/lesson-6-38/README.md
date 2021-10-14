# Методы доступа get и set

### Задание 1

У вас есть следующий код:

```TypeScript
interface IToDoItem {
   // Название задачи
   caption: string;

   // Признак завершенности задачи
   done?: boolean;
}

type TListOption = (string | IToDoItem )[];

class ToDo {
   protected _list: IToDoItem[] = [];

   constructor(list?: TListOption) {
      this._list = list ? this._getList(list) : [];
   }

   clear(): void {
      this._list = [];
   }

   set list(list: TListOption) {
      this._list = this._getList(list);
   }
}
```
У класса ***ToDo*** необходимо описать:

1. приватный метод ***_getList***, который принимает тип `TListOption` и возвращает массив `IToDoItem[]`
```TypeScript
const todo = new ToDo([
   'Написать ТЗ',
   { caption: 'Заполнить расписание', done: true }
]);
```

2. Геттер ***list***, который возвращает массив строк в формате ***`<caption>, <done ? + : ->`***
```TypeScript
console.log(todo.list);
// ['Написать ТЗ, -', 'Заполнить расписание, +']
```

3. Сеттер ***done***, который принимает ***caption*** в качестве параметра и отмечает задачу `IToDoItem` завершенной
```TypeScript
todo.done = 'Написать ТЗ'
```
