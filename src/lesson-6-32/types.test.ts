import {
   TUser,
   TEmployee,
   getUsers,
   personToString,
   calcSquare,
   TFigure
} from './types';

describe('6.3.2 - Типы данных', () => {

   it('Задание 1', () => {
      const users: TUser[] = getUsers();

      testArray<TUser>(users);

      users.forEach(user => {
         expect(user).toBeDefined();
         expect(Object.keys(user)).toHaveLength(3);
         expect(typeof user.name).toBe('string');
         expect(typeof user.age).toBe('number');
         expect(['male', 'famale'].indexOf(user.gender)).not.toBe(-1);
      });
   });

   it('Задание 2', () => {
      const persons: TEmployee[] = getPersons();
      const personsStrings: string[] = persons.map(personToString);

      testArray<string>(personsStrings);

      expect(personsStrings[0]).toMatch(new RegExp('Имя: Петр, Возраст: 40, Пол: мужской'));
      expect(personsStrings[1]).toMatch(new RegExp('Имя: Катя, Возраст: 23, Пол: женский'));
      expect(personsStrings[2]).toMatch(new RegExp('Имя: Иван, Возраст: 21, Пол: мужской, Компания: Some company 1'));
      expect(personsStrings[3]).toMatch(new RegExp('Имя: Юлия, Возраст: 20, Пол: женский, Компания: Some company 2'));
   });

   it('Задание 3', () => {
      const figures: TFigure[] = getFigures();

      testArray<TFigure>(figures);

      expect(calcSquare(figures[0])).toBe(50);
      expect(calcSquare(figures[1])).toBe(25);
      expect(calcSquare(figures[2])).toBe(25);
   });
});

function testArray<T>(arr: T[]): void {
   expect(arr).toBeDefined();
   expect(Array.isArray(arr)).toBe(true);
   expect(arr).not.toHaveLength(0);
}

function getPersons(): TEmployee[]  {
   return [
      {
         name: 'Петр',
         age: 40,
         gender: 'male'
      },
      {
         name: 'Катя',
         age: 23,
         gender: 'famale'
      },
      {
         name: 'Иван',
         age: 21,
         gender: 'male',
         company: 'Some company 1'
      },
      {
         name: 'Юлия',
         age: 20,
         gender: 'famale',
         company: 'Some company 2'
      }
   ];
}

export function getFigures(): TFigure[] {
   return [
      {
         type: 'rectangle',
         width: 10,
         height: 5
      },
      {
         type: 'rightTriangle',
         width: 10,
         height: 5
      },
      {
         type: 'rectangle',
         width: 5,
         height: 5
      }
   ];
}
