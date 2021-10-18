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

type TListItem = string | IToDoItem;

class ToDo {
   protected _list: IToDoItem[] = [];

   constructor(list?: TListItem[]) {
      this._list = list ? this._getList(list) : [];
   }

   clear(): void {
      this._list = [];
   }

   set list(list: TListItem[]) {
      this._list = this._getList(list);
   }
}
```
У класса ***ToDo*** необходимо описать:

1. Приватный метод ***_getList***, который принимает тип `TListItem[]` и возвращает массив `IToDoItem[]`.
Если в метод передали не массив `TListItem[]`, необходимо вернуть из метода текущий набор.
Если какой-то из переданных элементов не соответсвует типу `TListItem`, необходимо проигнорировать его и не добавлять в набор.
```TypeScript
const todo = new ToDo();
todo.list = ['Написать ТЗ', { caption: 'Заполнить расписание' }]
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
