import {readonly_test, private_test, protected_test, public_test} from './task';

describe('Урок 6.3.6 - Модификаторы доступа', () => {
    describe('Задача 1. Модификатор readonly', () => {
        // '_id', '_createTime'
        it('Проверяем количество полей и методов в ответе', () => {
            expect(readonly_test().length).toBe(2);
        })
        it('Наличие ожидаемых полей и методов', () => {
            const data = readonly_test();
            expect(data.includes('_id')).toBe(true);
            expect(data.includes('_createTime')).toBe(true);
        })
    });
    describe('Задача 2. Модификатор private', () => {
        // '_createTime', '_updateTime', 'resetUpdateTime'
        it('Проверяем количество полей и методов в ответе', () => {
            expect(private_test().length).toBe(3);
        })
        it('Наличие ожидаемых полей и методов', () => {
            const data = private_test();
            expect(data.includes('_createTime')).toBe(true);
            expect(data.includes('_updateTime')).toBe(true);
            expect(data.includes('resetUpdateTime')).toBe(true);
        })
    });
    describe('Задача 3. Модификатор protected', () => {
        // 'moduleCaption', 'updateTime', 'getCreateTime, _id'
        it('Проверяем количество полей и методов в ответе', () => {
            expect(protected_test().length).toBe(4);
        })
        it('Наличие ожидаемых полей и методов', () => {
            const data = protected_test();
            expect(data.includes('moduleCaption')).toBe(true);
            expect(data.includes('updateTime')).toBe(true);
            expect(data.includes('getCreateTime')).toBe(true);
            expect(data.includes('_id')).toBe(true);
        })
    });
    describe('Задача 4. Модификатор public', () => {
        // '_id', 'getCreateTime', 'moduleCaption'
        it('Проверяем количество полей и методов в ответе', () => {
            expect(public_test().length).toBe(3);
        })
        it('Наличие ожидаемых полей и методов', () => {
            const data = public_test();
            expect(data.includes('_id')).toBe(true);
            expect(data.includes('getCreateTime')).toBe(true);
            expect(data.includes('moduleCaption')).toBe(true);
        })
    });
});
