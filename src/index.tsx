/*
  Используя рекурсию, вычислите сумму всех элементов одномерного массива
*/
export function arraySum(arr: number[]): number {
  let result = 0;
  const sum = (pos: number): number => {
    return arr[pos] + (pos < (arr.length - 1) ? sum(pos + 1) : 0);  
  };
  return sum(0);
}


/*
  В функцию getDelimeters() приходит целое неотрицательное число.
  Используя рекурсию, вычислите все делители этого числа, за исключением единицы и его самого,
  и верните итоговый результат в виде массива чисел, упорядоченных по возрастанию.
*/
export function getDelimeters(value: number): number[] {
  const result: number[] = [];
  const getDelim = (delim: number) => {
    if (delim < value) {
      if (value % delim == 0) {
        result.push(delim);
      }
      delim++;
      getDelim(delim);
    }
  };
  getDelim(2);
  return result;
}


/*
  В функцию lettersReplace() приходит строковая переменная, содержащая текст, где могут встречаться 
  удвоенные, утроенные и т.д. пробелы. Используя рекурсию и не используя циклы или строковые функции автозамены, 
  замените все неодиночные пробелы на одиночные и верните итоговую строку.
*/
export function lettersReplace(message: string): string {
  let result = '';
  const replaceStr = (pos: number) => {
    if (pos > 0 && (message[pos] == ' ' && message[pos-1] !== ' ') || message[pos] !== ' ') {
      result += message[pos];
    }
    if (pos < message.length - 1) {
      pos++;
      replaceStr(pos);
    }
  };
  replaceStr(0);
  return result;
}
