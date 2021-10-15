import { ToDo, TListOption } from './accessors';

describe('6.3.8 - Методы доступа get и set', () => {

   it('Задание 1', () => {
      const list: TListOption = getList();
      const todo = new ToDo(list);

      todo.done = 'Item 3';
      todo.done = 'Item 1';
      todo.done = 'Item 4';

      todo.list = ['Item 5', {caption: 'Some todo'}];

      const todolist = todo.list;

      testArray<string>(todolist);
      expect(todolist).toHaveLength(6);

      expect(todolist[0]).toBe('Item 1, +');
      expect(todolist[1]).toBe('Item 2, -');
      expect(todolist[2]).toBe('Item 3, +');
      expect(todolist[3]).toBe('Item 4, +');
      expect(todolist[4]).toBe('Item 5, -');
      expect(todolist[5]).toBe('Some todo, -');

      todo.clear();
      testArray<string>(todo.list);
      expect(todo.list).toHaveLength(0);
   });
});

function getList(): TListOption {
   return [
      'Item 1',
      {
         caption: 'Item 2',
      },
      'Item 3',
      {
         caption: 'Item 4',
         done: false
      }
   ];
}

function testArray<T>(arr: T[]) {
   expect(arr).toBeDefined();
   expect(Array.isArray(arr)).toBe(true);
}
