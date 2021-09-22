import { personUpdate, objectFieldsList, objectClone } from './Objects';

describe('Урок 5.12 - Работа с объектами', () => {
    describe('Манипуляции со свойствами объекта', () => {
        it('Изменение объекта: удаление поля age', () => {
            expect(personUpdate({
                name: 'Olga',
                age: 35,
                gender: 'female',
                height: 162
            })).toStrictEqual({
                name: 'Olga',
                gender: 'female',
                height: 162
            });
        });

        it('Изменение объекта: добавление поля income', () => {
            expect(personUpdate({
                name: 'Oleg',
                age: 45,
                gender: 'male',
                height: 182
            })).toStrictEqual({
                name: 'Oleg',
                age: 45,
                gender: 'male',
                height: 182,
                income: 100000
            });
        });

        it('Изменение объекта: ничего не должно измениться', () => {
            expect(personUpdate({
                name: 'Oleg',
                age: 45,
                gender: 'male',
                height: 182,
                income: 80000
            })).toStrictEqual({
                name: 'Oleg',
                age: 45,
                gender: 'male',
                height: 182,
                income: 80000
            });
        });
    });
    
    describe('Получение свойств объекта', () => {
        it('Выборка и объединение названий свойств объекта', () => {
            expect(objectFieldsList({
                name: 'Ivan',
                age: 45,
                gender: 'male',
                height: 182
            }, {
                fio: 'Oleg Ivanovich',
                weight: 82
            }, {
                id: 1,
                isDeleted: true
            })).toStrictEqual(['age', 'fio', 'gender', 'height', 'id', 'isDeleted', 'name', 'weight']);
        });
    });
    
    describe('Операции клонирования объектов', () => {
        it('Клонирование 5 объектов', () => {
            expect(objectClone({
                value: 0
            }, 5)).toEqual([{value: 0, id: 0}, {value: 0, id: 1}, {value: 0, id: 2}, {value: 0, id: 3}, {value: 0, id: 4}]);
        });
    });
});
