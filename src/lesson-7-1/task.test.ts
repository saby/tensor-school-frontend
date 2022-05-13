import {mock, getData, catchException, FIRST_DELAY, SECOND_DELAY, THIRD_DELAY} from './task';

describe('Асинхронность в JS', () => {
   beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

   it('Задача 7. Создание разрешенного промиса', () => {
      const pr = mock(FIRST_DELAY);
      jest.runAllTimers();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), FIRST_DELAY);
      return pr.then((data) => {
         expect(data).toBe(FIRST_DELAY);
      });
   });

   it('Задача 8. Параллельное выполнение промисов', () => {
      const data = getData();
      jest.advanceTimersByTime(THIRD_DELAY);
      expect(setTimeout).toHaveBeenCalledTimes(3);
      return data.then((res) => {
         expect(res).toEqual([FIRST_DELAY, SECOND_DELAY, THIRD_DELAY]);
      });
   });

   it('Задача 9. Обработка ошибок в асинхронном коде', () => {
      return catchException().then((res) => {
         expect(res).toBe('my error');
      });
   });
});