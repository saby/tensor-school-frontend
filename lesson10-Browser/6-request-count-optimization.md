# Оптимизация по количеству запросов

Ранее мы научились уменьшать размер наших ресурсов, файлов, необходимых браузеру, что бы отобразить нашу страницу пользователю.
Это не единственный "рычаг" который мы можем использовать для ускорения загрузки. Один из таких рычагов — заставить браузер
делать меньше запросов за ресурсами. И нет, не надо удалять со страницы изображения, отказываться от скриптов и стилей...

## Объединение ресурсов в пакеты

Первое, что можно сделать для уменьшения количества запросов — объединение ресурсов. Допустим у вас на страницу подключаются
два файла с компонентами для вашей страницы, а кроме скриптов для каждого из компонентов подключены стили...

```html
<html lang="ru">
<head>
    <link rel="stylesheet" href="/style/button.css"/>
    <link rel="stylesheet" href="/style/dropdown.css"/>
    <title>Beautiful web page</title>
</head>
<body>
    <h1>Our beautiful web page</h1>
    <script src="/lib/button.js"></script>
    <script src="/lib/dropdown.js"></script>
</body>
</html>
```

За каждым из них браузер отправит отдельный запрос. Что если их объединить? Создадим новый файл `/lib/bundle.js`
и разместим в нем друг за другом сохраняя порядок содержимое файлов `/lib/button.js` и `/lib/dropdown.js`. Аналогично поступим
с файлами стилей разместив их в `/style/bundle.css`

```html
<html lang="ru">
<head>
    <link rel="stylesheet" href="/style/bundle.css"/>
    <title>Beautiful web page</title>
</head>
<body>
    <h1>Our beautiful web page</h1>
    <script src="/lib/bundle.js"></script>
</body>
</html>
```

Теперь вместо 4-х запросов браузеру понадобится всего 2. Дополнительно мы немного сократили размер HTML-документа, а если
на нашем веб-сервере включено сжатие данных, то размер сжатого `bundle.js` может оказаться меньше чем сумма сжатых 
по отдельности `button.js` и `dropdown.js`.

К счастью выполнять эти действия руками не требуется. Существует множество утилит, позволяющих автоматизировать этот процесс.
Одна из таких утилит [Webpack](https://webpack.js.org/). Современные инструменты умеют гораздо больше, чем просто объединять файлы.
Например, в процессе объединения может производиться так называемый Tree Shaking, процесс, в результате него 
из итогового пакета удаляется код, который присутствует в исходных файлах, но реально не используется в приложении.

## Кэширование

Вот было бы здорово, если бы браузер вообще не делал запросов на сервер! И это возможно! Для этого в браузерах есть
возможность сохранить загруженные ранее файлы и в следующий раз не ходить за ним в сеть. Этот механизм называется "кэширование".

Кэшированием управляет веб-сервер. Именно он при ответе на запрос может добавить специальный заголовок `Cache-control`.

Не вдаваясь в детали, есть несколько основных стратегий кэширования:
 1. Кэшировать навсегда: в этом случае браузер, однажды сохранив файл в кэш, никогда больше за ним не пойдет
 1. Кэшировать на ограниченное время: как предыдущая, но через указанный промежуток времени браузер попытается обновить ресурс
 1. Кэшировать, но всегда уточнять наличие свежей версии
 1. Не кэшировать вообще

Под каждый тип содержимого и задачу может потребоваться разная политика кэширования. Рассмотрим самый "выигрышный" с точки зрения
скорости — кэшировать навсегда. Такой вариант можно выбрать для всех ресурсов, загружаемых на странице.
Для кэширования "насегда" заголовок должен иметь вот такой вид:

```
Cache-control: max-age=31536000,immutable
```

Параметр max-age означает максимальный возраст записи в кэше в секундах. 31536000 соответствует 1 году и является максимальным значением,
значение immutable означает что файл никогда не изменится.

Но если браузер закэширует все "намертво", как же нам тогда обновлять наш сайт?

В качестве "ключа" для кэширования браузер использует URL загружаемого файла. Если с каждым обновлением менять URL файла,
например дописывать в имя файла версию обновления (`/lib/bundle.v25.js`) или хэш-сумму содержимого файла 
(`/lib/bundle.xfa3284bd.js`), то с каждым обновлением файл будет иметь другой URL, а значит выпадет из кэша и будет загружено заново. 

Для автоматизации задачи изменения имени файла при обновлении существует множество утилит. Упомянутый ранее Webpack 
обладает такой возможностью. При корректной настройке ваш bundle будет менять свое имя с каждым обновлением автоматически.

### Дополнительные материалы:

- [Prevent unnecessary network requests with the HTTP Cache](https://web.dev/http-cache/)
- [Love your cache](https://web.dev/love-your-cache/)
- [HTTP-кэширование](https://developer.mozilla.org/ru/docs/Web/HTTP/Caching)