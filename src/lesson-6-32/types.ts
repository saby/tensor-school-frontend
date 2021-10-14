// 1
export type TUser = {
   name: string;
   age: number,
   gender: 'male' | 'famale'
};

export function getUsers(): TUser[] {
   return [
      {
         name: 'Дарья',
         age: 29,
         gender: 'famale'
      },
      {
         name: 'Артем',
         age: 31,
         gender: 'male'
      }
   ];
}

// 2
export type TEmployee = TUser & {company?: string};

export function personToString(person: TEmployee | TUser): string {
   const gender = {
      male: 'мужской',
      famale: 'женский'
   };
   let value = `Имя: ${person.name}, Возраст: ${person.age}, Пол: ${gender[person.gender]}`;
   if ((person as TEmployee).company) {
      value += `, Компания: ${(person as TEmployee).company}`;
   }
   return value;
}

// 3
export type TKind = 'rectangle' | 'rightTriangle';

export type TFigure = {
   type: TKind;
   width: number;
   height: number;
}

type TCalcFunc = (figure: TFigure) => number;

export const calcSquare: TCalcFunc = (figure) => {
   switch(figure.type) {
      case 'rectangle':
         return figure.width*figure.height;
      case 'rightTriangle':
         return (figure.width*figure.height)/2;
      default:
         return 0;
   }
}
