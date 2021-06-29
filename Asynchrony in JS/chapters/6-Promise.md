# Promise

Promise — это объект который содержит будущее значение асинхронной операции.

Promise имеет три состояния:

* нерешенный (в ожидании),
* решенный/resolved (завершен успешно),
* отклоненный/rejected (завершен с ошибкой).

Конструктор:

```javascript
    const promise = new Promise((resolve, reject) => {
        // какая-то логика, после чего вызывается resolve([result]) или reject([reason])
    });
```

Функция, переданная в конструктор new Promise, называется исполнитель. Когда Promise создаётся, она запускается автоматически и синхронно. Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript.

Когда promise получает результат, он должен вызвать один из этих колбэков:

resolve([result]) — если работа завершилась успешно, с результатом result.
reject([reason]) — если произошла ошибка, reason – объект ошибки.

Функции resolve и reject ожидают только один аргумент или ни одного. Все дополнительные аргументы будут проигнорированы.

После того как промис разрешился, он не может изменить свое состояние.

```javascript
    const promise1 = new Promise((resolve, reject) => {
        resolve(1);
        reject(new Error('something went wrong'));
        resolve(0);
    });

    const promise2 = new Promise((resolve, reject) => {
        reject(new Error('something went wrong'));
        resolve(1);
    });
```

![promise](../resources/promise.jpg)

Чтобы обработать результат выполнения промиса, существуют методы ***then***, ***catch***, ***finally***.

## Метод then
Добавляет обработчики завершения промиса (успешно или с ошибкой).
Синтаксис:

```javascript
    promise.then(
        onSuccess(result) { /* обработчик в случае успешного выполнения */ },
        onError(error) { /* обработчик в случае ошибки */ }
    );
```

Первый аргумент – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.

Второй аргумент – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

## Метод catch

Метод .catch(f) – это сокращённый вариант .then(null, f). catch перехватывает все виды ошибок в промисах: будь то вызов reject() или ошибка, брошенная в обработчике при помощи throw. Если мы пробросим (throw) ошибку внутри блока .catch, то управление перейдёт к следующему ближайшему обработчику ошибок. А если мы обработаем ошибку и завершим работу обработчика нормально, то продолжит работу ближайший успешный обработчик .then

```javascript
    promise.catch(onError);
```

Методы .then и .catch возвращают новый промис выполненный со значением вызванного обработчика, или оригинальное значение, если промис не был обработан (т.е. если соответствующий обработчик не является функцией).
## Метод finally

Вызов .finally(f) похож на .then(f, f). Независимо от результата выполнения промиса, вызовется функция f.

Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис.

Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.

Например:

```javascript
    promise.finally(f1).then(f2);
```


## Цепочка промисов
Так как и then и catchи и finally возвращают промис, эти методы можно объединять в цепочку вызовов.

```javascript
    // promise.then(**).then(**).then(**) - результат возвращаемый в предыдущем обработчике передается в другой. 
    // promise всегда остается в том же состоянии и результатом в котором разрешился
    pr = new Promise(resolve => {
        resolve(1);
    });
    pr.then(res => {
        console.log(res); //console.log(1)
        return res * 2;
    }).then(res => {
        console.log(res); //console.log(2) 
        return res * 2;
    }).then(res => {
        console.log(res); //console.log(4)
        return res * 2;
    });

    pr.then(res => {
        console.log(res); //console.log(1)
    });
```

## Статические методы класса Promise

*iterable* - перебираемый объект, который можно использовать в цикле for..of

**Promise.all(iterable)** - ожидает исполнения всех промисов или отклонения любого из них. Возвращает промис, который исполнится после исполнения всех промисов в iterable. В случае, если любой из промисов будет отклонён, Promise.all будет также отклонён.

**Promise.allSettled(iterable)** - ожидает завершения всех полученных промисов (как исполнения так и отклонения). Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

**Promise.race(iterable)** - ожидает исполнения или отклонения любого из полученных промисов. Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из .iterable.

**Promise.reject([reason])** - возвращает промис, отклонённый из-за reason.

**Promise.resolve([value])** - возвращает промис, исполненный с результатом value.

## Очередь микрозадач
Промисы имею свою очередь задач в рамках цикла событий. Эта очередь называется очередь микро задач. Когда промис выполнен, его обработчики попадают в очередь и ожидают пока JavaScript не закончит работу с синхронным кодом, пока стек вызовов не освободится.

В целом с учетом микро-, макрозадач и браузерного рендеринга полный цикл событий выглядит так:
1. Выполнить первую в очереди задачу из очереди м**И**крозадач
    * делать это пока очередь не будет пуста (в процессе выполнения микро задач, очередь может пополняться)
    * при отсутствии задач в очереди пропустить шаг
2. Выполнить перерендер страницы при необходимости.
3. Выполнить первую в очереди задачу из очереди м**А**крозадач
    * при отсутствии задач в очереди пропустить шаг
4. Повторить цикл

Сразу после каждой макрозадачи движок исполняет все задачи из очереди микрозадач перед тем, как выполнить следующую макрозадачу или отобразить изменения на странице, или сделать что-то ещё.

Чтобы поместить задачу в очередь микрозадач существует специальная функция ***queueMicrotask(func)***


Задачи:

* Какой будет порядок console.log?

```javascript
    console.log('start');

    setTimeout(() => {
        console.log('timeout 1');
    }, 200);

    Promise.resolve(42).then(console.log)

    setTimeout(() => {
        console.log('timeout 2');
    }, 100);
    
    new Promise((res, rej) => {
        console.log('in promise');
        rej();
    }).catch(() => {
        console.log('in catch');
    });

    console.log('end');
```

* Напишите функцию, которая вернет промис, который завершиться через n секунд.

* Перепишите данный код так, чтоб все три результата были получены через 3 секунды

```javascript    
    const promiseAfter1s = () => {
        // через 1 секунду вернет промис, разрешившийся успешно
    }
    const promiseAfter2s = () => {
        // через 2 секунду вернет промис, разрешившийся успешно
    }
    const promiseAfter3s = () => {
        // через 3 секунду вернет промис, разрешившийся успешно
    }

    const results = [];

    promiseAfter1s()
        .then((res1) => {
            results.push(res1);
            return promiseAfter2s();
        })
        .then((res2) => {
            results.push(res2);
            return promiseAfter3s();
        })
        .then((res3) => {
            results.push(res3);
        })
        .then(() => {
            <!-- таким образом все три результата мы получим через 6 секунд -->
            console.log(results);
        });
```