## XMLHttpRequest

В этой главе мы рассмотрим как JS работает с макрозадачами на примере запроса данных по сети.

XMLHttpRequest это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.

XMLHttpRequest имеет более современный аналог - метод fetch. Подробнее о нем в главе [fetch](./7-Fetch.md).

Давайте рассмотрим синтаксис XMLHttpRequest.

Конструктор:

```javascript
    let xhr = new XMLHttpRequest();
```

Инициализация:

```javascript
    xhr.open(method, URL, [async, user, password]);
```

* method – HTTP-метод ("GET", "POST" и т.д.).
* URL – URL, куда отправляется запрос: строка, объект URL.
* async – если указать false, то запрос будет выполнен синхронно.
* user, password – логин и пароль для базовой HTTP-авторизации.

Отправка запроса:

```javascript
    xhr.send([body]);
```

* body - тело запроса

В случае с синхронным выполнением, дальнейшая работа с результатом запроса будет выглядеть так:

```javascript
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/post', false);

    try {
        xhr.send();
        if (xhr.status !== 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(xhr.response);
        }
    } catch(err) {
        console.log('Ошибка при отправке запроса', err);
    }
```

Cинхронные запросы используются редко, так как они блокируют основной поток до тех пор, пока загрузка не завершена. В результате мы видим *зависшую* страницу в браузере.

Некоторые возможности XMLHttpRequest, например: выполнение запроса на другой домен, установка таймаута, индикации прогресса недоступны для синхронных запросов.

Синхронные запросы используют очень редко, поэтому мы не будем рассматривать их дальше.

Для обработки результата асинхронного запроса используются события. Рассмотрим самые используемые:

```javascript
    xhr.onload = function() {
        // происходит при успешном завершении запроса
    };

    xhr.onerror = function() { 
        // происходит при ошибке отправки запроса
    };

    xhr.onreadystatechange = function() {
        // отслеживание изменения состояния запроса
        // xhr.readyState
        // UNSENT = 0 - исходное состояние
        // OPENED = 1 - вызван метод open
        // HEADERS_RECEIVED = 2 - получены заголовки ответа
        // LOADING = 3 - ответ в процессе передачи (данные частично получены)
        // DONE = 4 - запрос завершён
    };
```

В случае с асинхронным выполнением, дальнейшая работа с результатом запроса будет выглядеть так:

```javascript
    let xhr = new XMLHttpRequest();

    xhr.open('GET', '/post');

    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(xhr.response);
        }
    };

    xhr.onerror = function(err) {
        console.log('Ошибка при отправке запроса', err);
    };

    xhr.send();
```

В реальном коде нам нужно не просто вывести результат запроса в консоль, а как-то его обработать, используя данные из него, например, отправить еще один запрос. Взляните на пример ниже:

```javascript
    ...
    xhr.onload = function() {
        if (xhr.status !== 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            // получили данные для следующего запроса
            let postCommentsID = xhr.response.commentsID;

            // делаем еще один запрос
            let postCommentsXHR = new XMLHttpRequest();

            postCommentsXHR.open('GET', `/post/${postCommentsID}`);

            postCommentsXHR.onload = function() {
                if (xhr.status !== 200) {
                    console.log(`Ошибка ${postCommentsXHR.status}: ${postCommentsXHR.statusText}`);
                } else {
                    postCommentsXHR.response.forEach(function(comment) {
                        // делаем что-то дальше с запросом
                    });
                }
            };
        }
    };
```

Данный пример мог быть намного больше. В подобном коде трудно интуитивно разобраться. Такого рода конструкции (растущие вбок) называют ***callback hell*** или ад обратных вызовов.

В современном JavaScript есть подходы, которые позволяют избежать этого. Это [Promise](./6-Promise.md), [async/await](./8-Await.md) и разбиение кода на [модули](./9-Module.md).

В современной веб-разработке XMLHttpRequest практически не используется. Т.к. в языке есть более современные способы для отправки запросов, а также полифилы для старых браузеров.

Вернемся ко второму примеру из начала курса:

```javascript
    const start = Date.now();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/long-response', false);
    try {
        xhr.send();
        if (xhr.status !== 200) {
            alert('Ошибка');
        } else {
            alert(`Выполнено за ${(Date.now() - start) / 1000} секунд`);
        }
    } catch(err) {
        alert("Запрос не удался");
    }
```

И перепишем его на асинхронный запрос без плокирования основного потока:

```javascript
    const start = Date.now();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/long-response');

    xhr.onload = function() {
        if (xhr.status !== 200) {
            alert('Ошибка');
        } else {
            alert(`Выполнено за ${(Date.now() - start) / 1000} секунд`);
        }
    };

    xhr.onerror = function(err) {
        alert("Запрос не удался");
    };
```

На этом знакомство с XMLHttpRequest в рамках данного курса закончено. Более подробно ознакомится с данным API можно тут: [XMLHttpRequest](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest).