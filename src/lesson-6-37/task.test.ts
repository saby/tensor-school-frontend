import TestClass from './task';

describe('Урок 6.3.7 - Статические поля и методы', () => {
    describe('Задача 1. Поле counter', () => {
        it('Поле counter существует у экземпляра класса', () => {
            expect(new TestClass().counter).not.toBeUndefined();
        })
        it('Поле counter инициализируется с значением 0', () => {
            expect(new TestClass().counter).toBe(0);
        })
        it('Проверка работы счетчика counter', () => {
            const data = new TestClass();
            expect(data.counter).toBe(0);
            data.counter++;
            expect(data.counter).toBe(1);
        })
    });
    describe('Задача 2. Поле counterStatic', () => {
        it('Существует статическое поле counterStatic', () => {
            expect(TestClass.counterStatic).not.toBeUndefined();
        })
        it('Поле counterStatic инициализируется с значением 0', () => {
            expect(TestClass.counterStatic).toBe(0);
        })
        it('Проверка работы счетчика counterStatic', () => {
            expect(TestClass.counterStatic).toBe(0);
            TestClass.counterStatic++;
            expect(TestClass.counterStatic).toBe(1);
        })
    });
    describe('Задача 3. Метод PI', () => {
        it('Существует статический метод PI', () => {
            expect(TestClass.PI).not.toBeUndefined();
        })
        it('Метод возвращает значение PI', () => {
            expect(TestClass.PI()).toBe(Math.PI);
        })
    });
    describe('Задача 4. Метод ceil', () => {
        it('Существует статический метод ceil', () => {
            expect(TestClass.ceil).not.toBeUndefined();
        })
        it('Метод корректно округляет', () => {
            expect(TestClass.ceil(1.1)).toBe(2);
            expect(TestClass.ceil(3.5)).toBe(4);
            expect(TestClass.ceil(2.9)).toBe(3);
            expect(TestClass.ceil(Math.PI)).toBe(4);
            expect(TestClass.ceil(-Math.PI)).toBe(-3);
        })
    });
});
