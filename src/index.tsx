export const FIRST_DELAY = 100;
export const SECOND_DELAY = 200;
export const THIRD_DELAY = 300;

// 1.
// напишите функцию, которая принимает на вход number аргумент (количество миллисекунд)
// и возвращает промис, который завершится через заданное количество миллисекунд
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// 2.
// Перепишите функцию так, чтобы она выполнялась быстрее.
export function getData(): Promise<[number, number, number]> {
    // const result = [];

    // return mock(100)
    //     .then((data1) => {
    //         result.push(data1);
    //         return mock(200);
    //     })
    //     .then((data2) => {
    //         result.push(data2);
    //         return mock(300);
    //     })
    //     .then((data3) => {
    //         result.push(data3);
    //         return result;
    //     });
    return Promise.all([
        mock(FIRST_DELAY),
        mock(SECOND_DELAY),
        mock(THIRD_DELAY)
    ]);
}

// 3.
// исправь функцию так чтобы блок try/catch обрабатывал завершенный с ошибкой промис
// function catchExeption() {
//     try {
//         Promise.reject(new Error('my error'));
//     } catch (err) {
//         return err.message;
//     }
// }
export async function catchExeption(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err: unknown) {
        const e = err as Error;
        return e.message;
    }
}