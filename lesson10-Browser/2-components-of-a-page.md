# Из чего состоят наши страницы

Современная страница может загружать множество разнотипного содержимого...

## HTML-код

То, с чего начинается любая страница. Без HTML-разметки не может существовать ни одна страница. 
Кроме собственно содержимого страница содержит ссылки на ресурсы, которые необходимы для ее работы.

## CSS-стили

Без них нельзя представить современный Web. Содержат всю информацию о том, как выглядят элементы страницы, 
ее заголовки, параграфы, изображения, прочие элементы управления. 
Если страница это как правило один файл, то стилей может быть несколько. 
Например, стили могут быть различные для разных устройств просмотра (браузер, принтер, программа для чтения экрана), 
размеров экрана (большой монитор, маленький экран телефон, средний экран планшета), 
ориентаций экрана (портретная, ландшафтная).

## Изображения

Изображения могут быть либо вставлены непосредственно в сам контент страницы через соответствующий 
тег <img />, либо являться частью оформления и подгружаться с использованием правил 
CSS (например фоновые изображения).

## Шрифты

Автор страницы может указать что для отображения текста на странице должен быть использован авторский шрифт 
вместо одного из системных. В этом случае файлы со шрифтом (а их может быть несколько, например для обычного, 
жирного и курсивного начертания) придется загрузить отдельно.

## JavaScript-код

JavaScript изначально был предназначен для простейших действий с элементами страницы, для придания ей динамичности. 
Сейчас без него не обходится большинство сайтов в сети. Многочисленные фреймворки, библиотеки, огромные приложения 
написаны на JS и файлы с кодом должны быть подгружены из внешних источников.

С каждым из этих типов ресурсов у браузера есть "дополнительная работа" которую ему нужно совершить что бы отобразить 
страницу пользователю. Каждый из ресурсов влияет на конечный результат по разному.