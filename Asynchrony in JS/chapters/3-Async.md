# Как JavaScript работает с асинхронным кодом
Чтобы понять как JavaScript работает с асинхронным кодом, нам нужно знать что такое ***цикл событий или Event Loop***.

Алгоритм работы цикла событий:
1. Выполнить первую в очереди задачу из очереди м**И**крозадач
    * делать это пока очередь не будет пуста (в процессе выполнения микро задач, очередь может пополняться)
    * при отсутствии задач в очереди пропустить шаг
2. Выполнить перерендер страницы при необходимости.
3. Выполнить первую в очереди задачу из очереди м**А**крозадач
    * при отсутствии задач в очереди пропустить шаг
4. Повторить цикл

Очередь м**И**крозадач - очередь задач, которые нужно выполнить сразу после текущего исполняемого сценария. Сюда попадают обработчики разрешившихся [промисов](./6-Promise.md) и колбеки [MutationObserver](https://developer.mozilla.org/ru/docs/Web/API/MutationObserver).

Очередь м**А**крозадач - очередь задач, которые нужно выполнить после текущего исполняемого сценария, всех микрозадач и браузерного рендеринга.  Сюда попадают обработчики [setTimeout и setInterval](./4-Planning.md), [xhr](./5-XHR.md), [fetch](./7-Fetch.md), [браузерные события](https://developer.mozilla.org/ru/docs/Web/Events).

Все микрозадачи завершаются до обработки каких-либо событий или рендеринга, или перехода к другой макрозадаче.

`Асинхронность в JavaScript – это не встроенная возможность языка, а API, которое предоставляется средой выполнения (Браузер, Node.js).`

Для начала рассмотрим работу цикла событий без очереди микрозадач и браузерного рендеринга.

```javascript
    const networkRequest = () => {
        setTimeout(() => {
            console.log('Async Code');
        }, 2000);
    };

    console.log('Hello World');
    networkRequest();
    console.log('The End');
```

![macrotask](../resources/macrotask.gif)
`(Пример кода под картинку с интерента. Можно привлечь дизайнеров и сделать свой пример)`

Когда код начал выполняться, был создан глобальный контекст выполнения (на картинке опущен) и добавлен на вершину стека вызовов. Далее, на вершину стека вызовов помещается console.log('Hello World'), после выполнения он удаляется из стека.

Далее встречается вызов функции networkRequest(), он добавляется на вершину стека.

Следующим вызывается функция setTimeout() и помещается на вершину стека. Функция setTimeout() имеет 2 аргумента: 1) функция обратного вызова и 2) время в миллисекундах.

setTimeout() запускает таймер на 2 секунды в окружении web API (кладет колбек setTimeout в очередь макрозадач, где ожидается завершение таймера). На этом этапе, setTimeout() завершается и удаляется из стека. После этого, в стек добавляется console.log('The End'), выполняется и удаляется из него по завершению.

Далее, в процесс вступает цикл обработки событий.  
Задача цикла обработки событий заключается в том чтобы следить за стеком вызовов и определять пуст он или нет. Если стек вызовов пустой, то цикл обработки событий заглядывает в очередь сообщений, чтобы узнать есть ли обратные вызовы, которые ожидают своего выполнения.

По истечению таймера, в очередь сообщений добавляется обратный вызов setTimeout.

Т.к. стек выполнения пуст, а очередь сообщений содержит один обратный вызов цикл обработки событий добавляет обратный вызов на вершину стека.

console.log('Async Code') добавляется на вершину стека, выполняется и удаляется из него. На этом моменте обратный вызов выполнен и удален из стека, а программа полностью завершена.

Можно попробовать дугие примеры работы цикла событий с очередью макрозадач в [онлайн песочнице](http://latentflip.com/loupe/)