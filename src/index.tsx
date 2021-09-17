/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data: string): string {
  let result = '';
  
  let arr: string[] = data.split(',');
  arr.sort((a: string, b: string) => {
      return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1;
  });
  result = arr.join(',');
  return result;
}


/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data: number[]): number[] {
  let result: number[] = [];
  
  result = data.filter((item) => { return item <= 100; });

  return result;
}


/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1: number[], array2: number[]): number[] {
  let result: number[] = [];
  
  array1.forEach((item, index) => {
      result.push(item);
      result.push(array2[index]);
  });

  return result;
}
