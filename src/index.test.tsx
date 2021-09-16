import { sum, sortAndSplit, addsDivToBody } from './index';

describe('название урока', () => {
  test('сумма 1 и 2', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('test', () => {
    expect(sortAndSplit('1,5,4')).toStrictEqual(['1', '4', '5']);
  });

  test('test1', () => {
    addsDivToBody('as');

    expect(document.body).toMatchSnapshot();
  });
});
