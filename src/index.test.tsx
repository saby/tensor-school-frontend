import { forCycle, whileCycle, doWhileCycle } from './index';

describe('Урок 5.10 - Циклы', () => {
  test('Тест цикла for, параметры 1 и 2', () => {
    expect(forCycle(1, 2)).toBe(2);
  });

  test('Тест цикла for, параметры 2 и 20', () => {
    expect(forCycle(2, 20)).toBe(110);
  });

  test('Тест цикла while, параметр 2', () => {
    expect(whileCycle(2)).toBe(5);
  });
  
  test('Тест цикла while, параметр 110', () => {
    expect(whileCycle(110)).toBe(11);
  });

  test('Тест цикла doWhileCycle, параметр "Мороз и солнце, день чудесный"', () => {
    expect(doWhileCycle("Мороз и солнце, день чудесный")).toBe("Мо_оз_и _ол_це_ д_нь_чу_ес_ый");
  });
});