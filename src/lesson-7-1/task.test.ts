import {mock, getData, catchException, FIRST_DELAY, SECOND_DELAY, THIRD_DELAY} from './task';

describe('Асинхронность в JS', () => {
   it('Задача 7. Создание разрешенного промиса', () => {
      return mock(FIRST_DELAY).then((data) => {
         expect(data).toBe(FIRST_DELAY);
      });
   });

   it('Задача 8. Параллельное выполнение промисов', () => {
      const startTime = Date.now();
      return getData().then((data) => {
         expect(data).toEqual([FIRST_DELAY, SECOND_DELAY, THIRD_DELAY]);
         expect(Date.now() - startTime).toBeLessThan(FIRST_DELAY + SECOND_DELAY + THIRD_DELAY);
      });
   });

   it('Задача 9. Обработка ошибок в асинхронном коде', () => {
      return catchException().then((res) => {
         expect(res).toBe('my error');
      });
   });
});