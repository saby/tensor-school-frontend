/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start: number, end: number): number {
    let result = 0;
    
    for (let i=start; i<=end; i++) {
        if (i % 2 == 0) {
            result += i;
        }
    }
  
    return result;
}
  
  
/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a: number): number {
    let result = 0;
  
    while (a > 0.1) {
        a /= 2;
        result++;
    }
  
    return result;
}
  
  
/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message: string): string {
    let result = '';
    let i = 0;
  
    do {
        if ((i+1) % 3 == 0) {
            result += '_';
        } else {
            result += message[i];
        }
        i++;
    } while (i < message.length);
  
    return result;
}
