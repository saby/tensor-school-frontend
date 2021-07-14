# Метод fetch

fetch - это глобальный метод для работы с запросами и ответами HTTP.

Базовый синтаксис: 
```javascript
   const promise = fetch(url, [options])
```

url – URL для отправки запроса.
options – дополнительные параметры: метод, заголовки, тело запроса и т.д.
Если не указывать аргумент options, то получится простой GET запрос.

Вызов fetch всегда возвращает промис и дальнейшая работа с результатом запроса или ошибкой выполняется через методы промиса.

Promise возвращаемый вызовом fetch() перейдёт в состояние "завершен с ошибкой" только если fetch не смог совершить вызов. Например из-за ошибки сети.

Результатом успешного выполнения fetch всегда будет объект класса [Response](https://developer.mozilla.org/ru/docs/Web/API/Response). Это происходит как только сервер пришлёт заголовки ответа.  
На этом этапе мы можем проверить статус HTTP-запроса и определить, выполнился ли он успешно, а также посмотреть заголовки, но пока без тела ответа.  
Для получения тела ответа нам нужно использовать дополнительный вызов метода на объекте Response.

* Response.arrayBuffer() - возвращает ответ как [ArrayBuffer](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
* Response.blob() - возвращает ответ как [Blob](https://developer.mozilla.org/ru/docs/Web/API/Blob)
* Response.formData() - возвращает ответ как объект [FormData](https://developer.mozilla.org/ru/docs/Web/API/FormData)
* Response.json() - возвращает ответ в формате JSON
* Response.text() - возвращает как обычный текст

Рассмотрим пример:
```javascript
   // Пример работы с GET запросом
   fetch(url)
      .then(response => {
         // если запрос был успешный
         if (response.status === 200) {
            // какой метод объекта Response вызывать зависит от того,
            // в каком формате сервер прислал ответ
            // это можно проверить в заголовках ответа
            // response.headers.get('Content-Type')
            return response.json();
         }
      })
      .then(data => {
         doSomethingWithData(data);
      })
      .cath(err => {
         // не забываем обработать возможные ошибки
         handleError(err);
      });
```
```javascript
   // Пример работы с POST запросом
   // предположим мы хотим что-бы сервер что-то записал
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
      .then(response => {
         // если сервер ответил что все ок, запись создана
         // делаем дальше что нам нужно
         if (response.status === 201) {
            deSomething();
         }
      })
      .cath(err => {
         // не забываем обработать возможные ошибки
         handleError(err);
      });;
```

Подробнее можно ознакомится [тут](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) и [тут](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch).