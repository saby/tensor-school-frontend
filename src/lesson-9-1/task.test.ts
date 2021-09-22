import {getUsers, createUser} from './task';

describe('Работа с данными', () => {
   it('Задача 5. GET запрос', () => {
      return getUsers().then((data) => {
         expect(data.length).toBe(10);
         expect(typeof data[0]).toBe('string');
      });
   });

   it('Задача 6. POST запрос', () => {
      return createUser({name: 'Ivan'}).then((res) => {
         expect(res).toEqual({name: 'Ivan', id: 11});
      });
   });
});