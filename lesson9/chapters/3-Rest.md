# REST API

REST расшифровывается как Representational State Transfer (передача состояния представления). Это архитектурный подход для создания API.  
REST API — идеология/стиль организации взаимодействия серверного приложения с клиентским приложением по определенному URL по протоколу HTTP.

## Принципы построения REST API

Адрес ресурса идентифицируется с помощью URL.  
Действие над ресурсом идентифицируется с помощью типа запроса (HTTP метода).

Вот все основные типы запросов:

GET — Получение данных;  
POST — Добавление новых данных;  
UPDATE — Обновление данных;  
DELETE — Удаление данных;  

REST API stateless. Это значит что в период между запросами серверу не нужно хранить информацию о состоянии клиента и наоборот. Все запросы от клиента должны быть составлены так, чтобы сервер получил всю необходимую информацию для выполнения запроса.

В качестве данных как правило используется JSON.

Так как REST - просто идеология, то какие методы, адреса, коды http ответов использовать решает сам разработчик.

## Запросы к REST API

Например, есть интернет-магазин книг. Тогда:

* чтобы получить все книги нужно отправить GET запроc на адрес /books
```
   GET /books HTTP/1.1
   Host: mysite.com
```
* чтобы получить конкретную книгу - GET /books/:id
```
   GET /books/4 HTTP/1.1
   Host: mysite.com
```
* чтобы удалить конкретную книгу - DELETE /books/:id
```
   DELETE /books/3 HTTP/1.1
   Host: mysite.com
```
* чтобы добавить новую книгу - POST /books с данными о новой книге
```
   POST /books HTTP/1.1
   Host: mysite.com
   Content-Type: application/json

   {
      "autor": "J. R. R. Tolkien",
      "title": "The Lord of the Rings",
      "price": 10000
   }
```
* чтобы обновить данные о книге - PATCH /books/:id с данными о книге
```
   PATCH /books/3 HTTP/1.1
   Host: mysite.com
   Content-Type: application/json

   {
      "autor": "J. R. R. Tolkien",
      "title": "The Hobbit",
      "price": 7000
   }
```
К GET запросу можно добавлять параметры фильтрации через компоненту запроса (search).
Запрос начинается с первого знака вопроса (?) и заканчивается октоторпом (#) или концом URL.

![Компоненты URL](../resources/url.jpg)

Таким образом:
* чтобы получить все книги за авторством Толкиена нужно отправить GET запроc на адрес /books с параметром "author" равным "Tolkien"

```
   GET /books?author=Tolkien HTTP/1.1
   Host: mysite.com
```


## Ответы от REST API

Код ответа — неотъемлемая часть REST и он должен быть релевантен сути ответа. Т.е. если не найден объект по запросу, это 404, если клиент обратился с некорректным запросом 400 и т.д.

* ответ на GET запроc на адрес /books
```
   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   [
      {"autor":"J. R. R. Tolkien","title":"The Lord of the Rings","price":10000},
      ...
   ]
```
* ответ на GET /books/:id
```
   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {"autor":"J. R. R. Tolkien","title":"The Lord of the Rings","price":10000}
```
* ответ на DELETE /books/:id
```
   HTTP/1.1 204 No Content
```
* ответ на POST /books
```
   HTTP/1.1 201 Created
   Location: http://mysite.com/books/5
   Content-Type: application/json; charset=utf-8

   {"autor":"J. R. R. Tolkien","title":"The Hobbit","price":7000}
```
* ответ на PATCH /books/:id с данными о книге
```
   HTTP/1.1 204 No Content
```

Плюсы REST API
* масштабируемость
* гибкость
* кешируемость

Минусы REST API
* нет спецификации
* не все методы поддерживаются клиентом и сервером
* сложность отладки
* ограниченный набор http кодов ответа
* привязанность к протоколу HTTP
* множество endpoint'ов