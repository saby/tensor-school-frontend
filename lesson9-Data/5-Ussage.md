# Практика работы с fetch

```javascript
   // Пример работы с GET запросом
   try {
      const response = await fetch(url);
      // если запрос был успешный
      if (response.status === 200) {
         // какой метод объекта Response вызывать зависит от того,
         // в каком формате сервер прислал ответ
         // это можно проверить в заголовках ответа
         // response.headers.get('Content-Type')
         const data = await response.json();
         doSomethingWithData(data);
      } else {
         throw new Error('Something went wrong');
      }
   } catch(err) {
      handleError(err);
   }
```
```javascript
   // Пример работы с POST запросом
   // предположим мы хотим что-бы сервер что-то записал
   try {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         // в body может быть не только JSON,
         // но тип данных в body должен быть тот же,
         // что указан в Content-Type в заголовке запроса
         body: JSON.stringify(data)
      });
      // если сервер ответил что, запись создана
      // делаем дальше что нам нужно
      if (response.status === 201) {
         deSomething();
      } else {
         throw new Error('Something went wrong');
      }
   } catch(err) {
      handleError(err);
   }
```
```javascript
   // Пример отмены запроса
   const abortController = new AbortController();
   fetch(url, {
      signal: abortController.signal
   })
      .then(() => {
         // сюда мы не попадем, т.к. запрос отменили
         console.log('in then');
      })
      .catch((err) => {
         // мы попадем сюда, т.к. запрос отменили
         // и err.name === 'AbortError'
         console.log(err.name);
      })

   abortController.abort();
```
