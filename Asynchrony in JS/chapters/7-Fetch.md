## fetch

В предыдущей главе мы узнали про промисы и микрозадачи.
В этой главе мы рассмотрим как JS работает с макрозадачами и микрозадачами на примере запроса данных с помощью метода fetch.

fetch - это современное JavaScript API для работы с запросами и ответами HTTP.

```javascript
    fetch(url, [options])
```

url – URL для отправки запроса.
options – дополнительные параметры: метод, заголовки и так далее.

```javascript
    // Пример POST запроса
    fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
```

Вызов fetch всегда возвращает промис и дальнейшая работа с результатом запроса или ошибкой выполняется через методы промиса.


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

И перепишем его c использованием fetch:

```javascript
    const start = Date.now();
    fetch('/long-response')
        .then(response => {
            if (response.status !== 200) { 
                alert('Ошибка');
            } else {
                alert(`Выполнено за ${(Date.now() - start) / 1000} секунд`);
            }
        })
        .catch(err => {
            alert("Запрос не удался");
        });
```

Запрос через fetch можно конфигурировать: устанавливать различные параметры (метод, заголовки, кеширование и т.д.)

Подробнее можно ознакомится [тут](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) и [тут](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch).