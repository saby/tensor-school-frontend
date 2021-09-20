import {mock, getData, catchExeption, FIRST_DELAY, SECOND_DELAY, THIRD_DELAY} from './index';

test('Создание разрешенного промиса', () => {
    return mock(FIRST_DELAY).then((data) => {
        expect(data).toBe(FIRST_DELAY);
    });
});

test('Параллельное выполнение промисов', () => {
    const startTime = Date.now();
    return getData().then((data) => {
        expect(data).toEqual([FIRST_DELAY, SECOND_DELAY, THIRD_DELAY]);
        expect(Date.now() - startTime).toBeLessThan(FIRST_DELAY + SECOND_DELAY + THIRD_DELAY);
    });
});

test('Обработка ошибок в асинхронном коде', () => {
    return catchExeption().then((res) => {
        expect(res).toBe('my error');
    });
});