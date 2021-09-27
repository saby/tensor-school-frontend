import { getDelimeters, spacesReplace, arraySum } from './Recursion';

describe('Урок 5.14 - Рекурсия', () => {
    it('Рекурсивное вычисление суммы элементов массива', () => {
        expect(arraySum([2, 12, 33, 0, 7, 17])).toBe(71);
    });

    it('Рекурсивное вычисление делителей числа 80', () => {
        expect(getDelimeters(80)).toStrictEqual([2, 4, 5, 8, 10, 16, 20, 40]);
    });

    it('Рекурсивная очистка строки от дублирующихся пробелов', () => {
        expect(spacesReplace("Я   встретил вас, и  все  былое...")).toBe("Я встретил вас, и все былое...");
    }); 
});
