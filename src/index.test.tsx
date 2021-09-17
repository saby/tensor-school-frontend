import { personUpdate, objectFields, objectClone } from './index';

describe('Урок 5.12 - Работа с объектами', () => {
  describe('Манипуляции со свойствами объекта', () => {
    test('Изменение объекта: удаление поля age', () => {
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

    test('Изменение объекта: добавление поля income', () => {
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

    test('Изменение объекта: ничего не должно измениться', () => {
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

  test('Выборка названий свойств объекта', () => {
    expect(objectFields({
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

  test('Клонирование 5 объектов', () => {
    expect(objectClone({
      value: 0
    }, 5)).toEqual([{value: 0, id: 0}, {value: 0, id: 1}, {value: 0, id: 2}, {value: 0, id: 3}, {value: 0, id: 4}]);
  });
});
