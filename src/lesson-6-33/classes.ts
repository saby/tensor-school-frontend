// 1
export type TUser = {
   name: string;
   age: number;
}

export class User {
   name: string = 'Name not defined';
   age: number = 0;

   constructor(name?: string, age?: number) {
      if (typeof name === 'string') {
         this.name = name;
      }
      if (typeof age === 'number') {
         this.age = age;
      }
   }
};

// 2
const DEF_WIDTH = 1;
const DEF_HEIGHT = 1;
export class Rectangle {
   width: number;
   height: number;

   constructor(width: number = DEF_WIDTH, height: number = DEF_HEIGHT) {
      this.width = Number(width) > 0 ? Number(width) : DEF_WIDTH;
      this.height = Number(height) > 0 ? Number(height) : DEF_HEIGHT;
   }
}

// 3
const START_COUNTER = 0;
export class Counter {
   counter: number = START_COUNTER;

   constructor(start: number = START_COUNTER) {
      this.counter = Number(start) || START_COUNTER;
   }

   // Метод увеличивает counter на 1
   increment(): number {
      return ++this.counter;
   }

   // Метод уменьшает counter на 1
   decrement(): number {
      return --this.counter;
   }
}
