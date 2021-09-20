import { appendToBody, generateTree, replaceNodes } from './index';

describe('Урок 5.15 - Работа с DOM', () => {
  afterEach(() => {
    document.body.innerHTML = '';   
  });

  test('Вставка элементов: 5 последовательных тегов P с содержимым и аттрибутами', () => {
    appendToBody('p', 'Привет, мир!', 5);
    expect(document.body).toMatchSnapshot();
  });

  test('Рекурсивное построение дерева тегов DIV с вложенностью 3, по 3 ветки в узле', () => {
    expect(generateTree(3, 3)).toMatchSnapshot();
  });

  test('Автозамена элементов дерева тегов с сохранением вложенной структуры', () => {
    expect(replaceNodes()).toMatchSnapshot();
  });
});