import {getPerson, getStudentsData, Person} from './task';

describe('Урок 6.3.4 - Интерфейсы', () => {
   describe('Задача 1. Найдите и исправьте ошибку в данных константы data в функции getPerson', () => {
      it('Интерфейс ответа соответствует классу Person', () => {
         expect(getPerson()).toBeInstanceOf(Person);
      })
      it('Ошибка в типе данных исправлена', () => {
         expect(typeof getPerson()._age).toBe('number')
      })
      it('Класс Person работает корректно с предоставленными данными', () => {
         expect(getPerson().greet()).toBe('Hi! I\'m Petr Smith. I\'m 7')
      })
   });

   describe('Задача 2. Заполните данные в массив в соответствии с интерфейсом', () => {
      it('getStudentsData возвращает массив ожидаемой длины', () => {
         const data = getStudentsData();
         expect(data.length).toBe(3);
      })
      it('Возвращаемое значение getStudentsData соответствует IStudentData[]', () => {
         const data = getStudentsData();
         for (let i = 0; i < data.length; i++) {
            expect(typeof data[i].name).toBe('string');
            expect(typeof data[i].secondName).toBe('string');
            expect(typeof data[i].age).toBe('number');
         }
         expect(typeof data[0].phone).toBe('string');
         expect(typeof data[1].phone).toBe('string');
         expect(data[2].phone).toBeUndefined();
      })
   })
});