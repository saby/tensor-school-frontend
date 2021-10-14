import {
   TUser,
   User,
   Rectangle,
   Counter
} from "./classes";

describe('6.3.3 - Классы', () => {
   describe('Задание 1. Определение класса', () => {
      it('Передали name и age', () => {
         const user1 = new User('Ivan', 31);
         testUser(user1);
      });

      it('Передали только name', () => {
         const user2 = new User('Petr');
         testUser(user2);
      });

      it('Передали только age', () => {
         const user3 = new User(undefined, 23);
         testUser(user3);
      });

      it('Ничего не передали', () => {
         const user4 = new User();
         testUser(user4);
      });

      it('Передали неправильные типы', () => {
         const user4 = new User(true, false);
         testUser(user4);
      });
   });

   describe('Задание 2. Значения по умолчанию', () => {
      it('Передали width и height', () => {
         const figure1 = new Rectangle(5, 5);
         testFigure(figure1);
      });

      it('Передали только width', () => {
         const figure2 = new Rectangle(5);
         testFigure(figure2);
      });

      it('Передали только height', () => {
         const figure3 = new Rectangle(null, 5);
         testFigure(figure3);
      });

      it('Ничего не передали', () => {
         const figure4 = new Rectangle();
         testFigure(figure4);
      });

      it('Передали отрицательно значение и строку', () => {
         const figure5 = new Rectangle(-10, '10');
         testFigure(figure5);
      });
   });

   describe('Задание 3. Методы класса', () => {
      it('Создание экземпляра и проверка методов', () => {
        const counter1 = new Counter();
        const counter2 = new Counter(-1);
        expect(counter1.counter).toBe(0);
        expect(counter1.increment()).toBe(1);
        expect(counter1.decrement()).toBe(0);
        expect(counter1.decrement()).toBe(-1);
        expect(counter1.counter).toBe(-1);
        expect(counter2.counter).toBe(-1);
        expect(counter2.increment()).toBe(0);
        counter2.decrement();
        counter2.decrement();
        expect(counter2.counter).toBe(-2);
      });
   });
});

function testUser(user: TUser): void {
   expect(user).toBeInstanceOf(User);
   expect(typeof user.name).toBe('string');
   expect(typeof user.age).toBe('number');
}

function testFigure(figure: Rectangle): void {
   expect(figure).toBeInstanceOf(Rectangle);
   expect(typeof figure.width).toBe('number');
   expect(figure.width > 0).toBe(true);
   expect(typeof figure.height).toBe('number');
   expect(figure.height > 0).toBe(true);
}
