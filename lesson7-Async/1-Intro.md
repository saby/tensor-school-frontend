# Введение

JavaScript - ***однопоточный язык программирования***, в котором может быть выполнено только что-то одно за раз. То есть, в одном потоке движок JavaScript может обработать только один оператор за раз.

Если какая-либо операция выполняется продолжительное время, вся программа остановит выполнение и будет ожидать ее завершения. Пока это происходит, вы не сможете взаимодействовать со страницей, будет ощущение, что вкладка зависла. Это называется ***блокированием потока***. 

Посмотрите на следующие примеры:

```javascript
    // блокирование потока из-за "тяжелого" вычисления
    
    let i = 0;
    const start = Date.now();
    function increment() {
        for (let j = 0; j < 1e9; j++) {
            i++;
        }
        return `Выполнено за ${(Date.now() - start) / 1000} секунд`;
    }
    console.log(increment());
```

```javascript
    // блокирование потока из-за синхронного сетевого запроса

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

Если запустить эти 2 блока кода, произойдет блокирование потока. Давайте разберемся, почему так происходит и как можно этого избежать.