## async/await

async/await - специальный синтаксис для работы с промисами в "синхронном стиле".

Ключевое слово async ставится перед объявлением функции.

```javascript
    async function f1() {};
    const f2 = async () => {};
```

У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически. Можно и явно вернуть промис, результат будет одинаковым.

```javascript
    async function f1() {
        return 1;
        // тоже самое что и
        // return Promise.resolve(1);
    };
```

Внутри функций объявленных с async становится доступно использование ключевого слова await.

Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

```javascript
    async function f() {
        console.log('start');
        const result = await new Promise(resolve => {
            setTimeout(() => {
                resolve('from promise')
            }, 1000);
        });
        console.log(result);
        console.log('end');
    }

    f();
```

Без async/await данный код мог бы выглядеть вот так:

```javascript
    console.log('start');
    new Promise(resolve => {
        setTimeout(() => {
            resolve('from promise')
        }, 1000);
    }).then(result => {
        console.log(result);
    }).then(() => {
        console.log('end');
    });
```

Обработка ошибок при использовании async/await выглядит также как и с синхронным кодом

```javascript
    async function f() {
        console.log('start');
        try {
            await Promise.reject(new Error('some error'));
        } catch (e) {
            console.log(e.message);
        }	
        console.log('end');
    };

    f();
```

Второй примеру из начала курса, переписанный с помощью метода fetch, с использование синтаксиса async/await будет выглядеть так:

```javascript
    const start = Date.now();
    try {
        const response = await fetch('/long-response');
        if (response.status !== 200) { 
            alert('Ошибка');
        } else {
            alert(`Выполнено за ${(Date.now() - start) / 1000} секунд`);
        }
    } catch(e) {
        alert("Запрос не удался");
    }
    
```

Задачи:
* Перепишите цепочку промисов с использованием async/await

```javascript
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
```

* Напишите функцию wait(ms), принимающую на вход сколько ms ожидать, которую можно было бы использовать внутри другой асинхронной функции вот так:

```javascript
    await wait(1000);
```