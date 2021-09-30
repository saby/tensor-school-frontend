import {Student, Person, IStudentData} from './task';

describe('Наследование', () => {
   it('Задача 1. Классы Person и Student', () => {
      const data = getStudentsData();
      for (let i = 0; i < data.length; i++) {
         const student = new Student(data[i]);
         expect(student).toBeInstanceOf(Person);
         expect(student).toBeInstanceOf(Student);

         expect(typeof student._name).toBe('string');
         expect(typeof student._secondName).toBe('string');
         expect(typeof student._age).toBe('number');
         expect(student._phone).not.toBeUndefined();

         const person = new Person(data[i]) as any;
         expect(person._phone).toBeUndefined();
      }
   })
   it('Задача 2. Методы getData', () => {
      const data = getStudentsData()[0];
      const person = new Person(data);
      expect(person.getData()).toStrictEqual({
         name: 'Ivan',
         secondName: 'Petrov',
         age: 20
      })
      const student = new Student(data);
      expect(student.getData()).toStrictEqual(data);
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