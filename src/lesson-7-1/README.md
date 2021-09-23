# Домашнее задание по теме "Асинхронность в JS"

1. Скольки поточный язык программирования JavaScript?  
    **Ответ**: однопоточный.

2. Сколько состояний может иметь промис? Перечислите их.  
    **Ответ** :
    * нерешенный/pending (в ожидании),
    * решенный/resolved (завершен успешно),
    * отклоненный/rejected (завершен с ошибкой).

3. Чем метод промиса .finally(f) отличается от .then(f, f)?  
    **Ответ**: в finally обработчик не имеет аргументов, мы не знаем в каком состоянии был завершен промис, результат или ошибка пробрасывается к последующим обработчикам.

4. Куда попадают колбеки таймаутов и промисов?  
    **Ответ**:  
    * колбеки таймаутов попадают в очередь задач
    * колбеки промисов попадают в очередь микрозадач

5. В какой последовательности будут выведены сообщения в консоли? Почему?
    ```javascript
    console.log('start');

    setTimeout(() => {
        console.log('timeout 1');
    }, 100);

    new Promise((resolve) => {
        console.log('promise constructor');
        resolve();
    }).then(() => {
        console.log('promise constructor then');
    });

    Promise.resolve().then(() => {
        console.log('promise resolve then');
    });

    setTimeout(() => {
        console.log('timeout 2');
    }, 0);

    console.log('end');
    ```
    **Ответ**:    
    `потому что этот код выполняется синхронно`  
    start  
    promise constructor  
    end

    `потому что этот код попадает в очередь микрозадач в такой последовательности`  
    promise constructor then  
    promise resolve then

    `потому что этот код попадает в очередь задач и по приоритету таймеров`  
    timeout 2  
    timeout 1  

6. Что будет выведено в консоль? Почему?
    ```javascript
    const pr = Promise.resolve(1);
    pr.then((res) => res * 2).then((res) => res * 2);

    pr.then(console.log);
    ```
    **Ответ**:  
    В консоль будет выведено 1.  
    Потому что цепочка из .then не меняет состояния промиса. Промис всегда находится в том состоянии в котором разрешился.

7. Напишите функцию mock, которая принимает на вход number аргумент (количество миллисекунд) и возвращает промис, который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
    ```typescript
    function mock(ms: number): Promise<number> {}
    ```

8. Перепишите функцию getData так, чтобы она выполнялась быстрее.
    ```typescript
    function getData(): Promise<[number, number, number]> {
        const result = [];

        return mock(100)
            .then((data1) => {
                result.push(data1);
                return mock(200);
            })
            .then((data2) => {
                result.push(data2);
                return mock(300);
            })
            .then((data3) => {
                result.push(data3);
                return result;
            });
    }
    ```

9. Исправь функцию catchException так чтобы блок try/catch обрабатывал завершенный с ошибкой промис и возвращал текст ошибки.  
    ```typescript
    function catchException() {
        try {
            Promise.reject(new Error('my error'));
        } catch (err) {
            return err.message;
        }
    }
    ```