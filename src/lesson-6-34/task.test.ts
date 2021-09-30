import {getPerson, getStudentsData, Student, Person} from './task';

describe('Интерфейсы', () => {
   it('Задача 1. Поиск ошибки в данных', () => {
      const person = getPerson();
      expect(person).toBeInstanceOf(Person);
      expect(typeof person._age).toBe('number')
      expect(person.greet()).toBe('Hi! I\'m Petr Smith. I\'m 7')
   });

   it('Задача 2. Передать массив данных', () => {
      const data = getStudentsData();
      expect(data.length).toBe(3);
      for (let i = 0; i < data.length; i++) {
         expect(typeof data[i].name).toBe('string');
         expect(typeof data[i].secondName).toBe('string');
         expect(typeof data[i].age).toBe('number');
      }
      expect(typeof data[0].phone).toBe('string');
      expect(typeof data[1].phone).toBe('string');
      expect(data[2].phone).toBeUndefined();
      const student = new Student(data[2]);
      expect(student._phone).toBe(null);
   })
});