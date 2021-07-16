# Метод fetch

fetch - это глобальный метод для работы с запросами и ответами HTTP.

Базовый синтаксис: 
```javascript
   const promise = fetch(url, [options])
```

url – адрес ресурса куда отправляется запрос. Может быть строка, экземпляр класса [URL](https://developer.mozilla.org/ru/docs/Web/API/URL) или [Request](https://developer.mozilla.org/ru/docs/Web/API/Request)  
options – дополнительные параметры: метод, заголовки, тело запроса и т.д.
Если не указывать аргумент options, то получится простой GET запрос.

Вызов fetch всегда возвращает промис и дальнейшая работа с результатом запроса или ошибкой выполняется через методы промиса.

Promise возвращаемый вызовом fetch() перейдёт в состояние "завершен с ошибкой" только если fetch не смог совершить вызов. Например из-за ошибки сети.

Результатом успешного выполнения fetch всегда будет объект класса [Response](https://developer.mozilla.org/ru/docs/Web/API/Response).  
Это происходит как только сервер пришлёт заголовки ответа.  
На этом этапе мы можем проверить статус HTTP-запроса и определить, выполнился ли он успешно, а также посмотреть заголовки, но пока без тела ответа.  

Для получения тела ответа нам нужно использовать дополнительный вызов метода для чтения ответа на объекте Response.

* Response.arrayBuffer() - возвращает ответ как [ArrayBuffer](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
* Response.blob() - возвращает ответ как [Blob](https://developer.mozilla.org/ru/docs/Web/API/Blob)
* Response.formData() - возвращает ответ как объект [FormData](https://developer.mozilla.org/ru/docs/Web/API/FormData)
* Response.json() - возвращает ответ в формате JSON
* Response.text() - возвращает как обычный текст

`Можно выбрать только один метод чтения ответа. После того, как ответ прочитан, мы уже не сможем «перечитать» его, используя другой метод.`

Запрос, сделанный fetch, можно прервать. Для таких целей существует специальный встроенный объект [AbortController](https://developer.mozilla.org/ru/docs/Web/API/AbortController).

Подробнее можно ознакомится [тут](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) и [тут](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch).