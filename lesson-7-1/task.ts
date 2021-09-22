export const FIRST_DELAY = 100;
export const SECOND_DELAY = 200;
export const THIRD_DELAY = 300;

// 7.
export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// 8.
export function getData(): Promise<[number, number, number]> {
    return Promise.all([
        mock(FIRST_DELAY),
        mock(SECOND_DELAY),
        mock(THIRD_DELAY)
    ]);
}

// 9.
export async function catchExeption(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err: unknown) {
        const e = err as Error;
        return e.message;
    }
}