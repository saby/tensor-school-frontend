import {Student, Person, IStudentData} from './task';

describe('Урок 6.3.5 - Наследование', () => {
   describe('Задача 1. Конструкторы для классов Person и Student', () => {
      it('Конструктор класса Person', () => {
         const data = getStudentsData();
         for (let i = 0; i < data.length; i++) {
            const person = new Person(data[i]) as any;
            expect(typeof person._name).toBe('string');
            expect(typeof person._secondName).toBe('string');
            expect(typeof person._age).toBe('number');
            expect(person._phone).toBeUndefined();
         }
      })
      it('Конструктор класса Student', () => {
         const data = getStudentsData();
         for (let i = 0; i < data.length; i++) {
            const student = new Student(data[i]) as any;
            expect(typeof student._name).toBe('string');
            expect(typeof student._secondName).toBe('string');
            expect(typeof student._age).toBe('number');
            expect(student._phone).not.toBeUndefined();
         }
      })

      it('Класс Student корректно хранит номер телефона', () => {
         const data = getStudentsData();
         expect(typeof new Student(data[0])._phone).toBe('string');
         expect(typeof new Student(data[1])._phone).toBe('string');
         expect(new Student(data[2])._phone).toBeNull();
         expect(data[2].phone).toBeUndefined();
      })
   })

   describe('Задача 2. Метод getData в классах Person и Student', () => {
      it('Формат ответа getData класса Person соответствует IPersonData', () => {
         const dataArr = getStudentsData();
         for (let i = 0; i < dataArr.length; i++) {
            const data = new Person({...dataArr[i]}).getData() as any;
            expect(typeof data.name).toBe('string');
            expect(typeof data.secondName).toBe('string');
            expect(typeof data.age).toBe('number');
            expect(data.phone).toBeUndefined();
         }
      })
      it('Данные ответа getData класса Person соответствуют полученным в конструктор класса', () => {
         const dataArr = getStudentsData();
         for (let i = 0; i < dataArr.length; i++) {
            const data = {...dataArr[i]};
            delete data.phone;
            expect(new Person({...data}).getData()).toStrictEqual(data)
         }
      })
      it('Формат ответа getData класса Student соответствует IStudentData', () => {
         const dataArr = getStudentsData();
         for (let i = 0; i < dataArr.length; i++) {
            const data = new Student({...dataArr[i]}).getData() as any;
            expect(typeof data.name).toBe('string');
            expect(typeof data.secondName).toBe('string');
            expect(typeof data.age).toBe('number');
            if (dataArr[i].phone !== undefined) {
               expect(typeof data.phone).toBe('string');
            } else {
               expect(data.phone).toBeUndefined();
            }
         }
      })
      it('Данные ответа getData класса Student соответствуют полученным в конструктор класса', () => {
         const dataArr = getStudentsData();
         for (let i = 0; i < dataArr.length; i++) {
            expect(new Student({...dataArr[i]}).getData()).toStrictEqual(dataArr[i])
         }
      })
   })
});

function getStudentsData(): IStudentData[] {
   /**
    * Данные студентов
    *
    * 1. Ivan Petrov 20 лет +7(555)555-55-50
    * 2. Stepan Petrov 19 лет +7(555)555-55-51
    * 3. Petr Ivanov 19 лет
    *
    */

   return [
      {
         name: 'Ivan',
         secondName: 'Petrov',
         age: 20,
         phone: '+7(555)555-55-50'
      },
      {
         name: 'Stepan',
         secondName: 'Petrov',
         age: 19,
         phone: '+7(555)555-55-51'
      },
      {
         name: 'Petr',
         secondName: 'Ivanov',
         age: 19,
         phone: undefined
      }
   ]
}
