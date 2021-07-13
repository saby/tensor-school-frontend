## fetch

fetch - это современное JavaScript API для работы с запросами и ответами HTTP.

```javascript
    fetch(url, [options])
```

url – URL для отправки запроса.  
options – дополнительные параметры: метод, заголовки и т.д. Все параметры перечислены [тут](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).

Вызов fetch всегда возвращает промис и дальнейшая работа с результатом запроса или ошибкой выполняется через методы промиса.

Запрос через fetch можно конфигурировать: устанавливать различные параметры (метод, заголовки, кеширование и т.д.).



```javascript
   // Пример POST запроса
   const pr = fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   });
```

Подробнее можно ознакомится [тут](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch).