# HTML 5. Основные понятия. Структура документа
## История создания

### Начало

История создания языка HTML берёт своё начало в далеких 1960х, когда Чарльз Голдфарб, Эдвард Мошер и Рэймонд Лори разработали язык разметки GML (англ. Generalized Markup Language — обобщённый язык разметки), который использовал теги для оформления. Он был создан для решения задачи переноса документов между различными платформами и операционными системами. Язык представляет собой не готовую систему разметки текста, а лишь удобный метаязык, позволяющий строить такие системы для конкретных обстоятельств.

В 1986 году GML был расширен и прошёл стандартизацию, получил новое название - SGML. Ввиду своей сложности и дороговизны реализации не получил широкого распространения, однако был использован военным ведомством США для оформления технической документации.

![./src/Untitled.png](./src/Untitled.png)

SGML разметка

В 1991 году Тимоти Джон Бернерс-Ли на основе SGML создаёт язык гипертекстовой разметки (HyperText Markup Language), он же HTML.

![./src/Untitled%201.png](./src/Untitled%201.png)

Тимоти Джон Бернерс-Ли

HTML обладал двумя неоспоримыми преимуществами:

- Простота. Язык состоял из небольшого количества дескрипторов (тегов все из которых пишутся в знакомых нам скобках (например <img>);
- Возможность форматировать документ без привязки к средствам отображения.

И вот 6 августа 1991 года появился первый сайт, сейчас он уже не сохранился, но посмотреть на него можно в [архиве](http://info.cern.ch/hypertext/WWW/TheProject.html)

![./src/Untitled%202.png](./src/Untitled%202.png)

Первый в мире сайт

### Дальнейшее развитие

Первая версия HTML содержала всего около 40 тегов. Их быстро стало не хватать и развитие языка началось полным ходом:

- Июнь 1993 - HTML 1.2. Появление первых тегов, которые намекали на визуальное оформление документа;
- 1994 - основание W3C (World Wide Web Consortium). Итогом стала стандартизация языка. Был выпущен базовый набор тегов и атрибутов, что позволило предотвратить создание "своего" HTML каждой из компаний;
- 22 сентября 1995 - выпуск версии 2.0. В этой версии появились формы и возможность общения с сервером;
- 1995 - версия 3.0. Включала в себя теги для создания таблиц, математических формул и т.д.;
- Когда стало понятно, что просто разметки текста недостаточно было принято решения внедрить поддержку нового средства оформления веб-страниц. Так 17 декабря 1996 года вышел CSS - Cascading Style Sheets (иерархические таблицы стилей). Стили не зависели от структуры документа и привязывались к тегам;
- 14 января 1997 уже под руководством Microsoft появился HTML 3.2 c полной поддержкой CSS;
- В конце 1997 появилась 4-я версия HTML, которая включала в себя возможности интернационализации, что позволило писать документы на любом языке. Так же новая версия включала в себя поддержку фреймов, скриптов и другие улучшения;
- Через пару дней появился HTML 4.01, которым разработчики пользовались более 10 лет;
- В 2004 году была создана рабочая группа WHAT (Web Hypertext Application Technology Working Group). W3С потеряла интерес к HTML и занималась развитием XML, а на его основе XHTML - расширяемого языка гипертекстовой разметки, который в итоге перестал развиваться. С 2006 обе группы работают вместе над дальнейшим развитием HTML;
- В 2014 году появился новый стандарт HTML версии 5, о котором дальше и пойдет речь.
## Основные понятия HTML

- Тег (tag) - ключевое слово, обрамлённое в скобки, которое указывает браузеру как форматировать и отображать его содержимое.

```html
<p>Paragraph Tag</p>

<h2>Heading Tag</h2>
<b>Bold Tag</b>

<i>Italic Tag</i>

<u>Underline Tag</u>
```

- Атрибут тега (tag attribute) - ключевое слово, которое предоставляет дополнительную информацию об элементе, являясь его модификатором.

```html
<element attribute_name="value">content</element>
```

## Структура HTML-страницы

На примере базовой структуры документа рассмотрим основные теги:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<link rel="stylesheet" href="styles.css">
		<meta charset="UTF-8">
	  <meta name="description" content="Free Web tutorials">
	  <meta name="keywords" content="HTML, CSS, JavaScript">
	  <meta name="author" content="John Doe">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Title of the document</title>
		<script src="./script.js" defer="defer" />
	</head>
	<body>
		<h1>This is a heading</h1>
		<p>This is a paragraph.</p>

		<script>
			console.log('This is the end of document');
		</script>
	</body>
</html>
```

На первой строчке всегда пишут тип документа:

```html
<!DOCTYPE html>
```

Данная строчка в коде означает, что типом документа является тип HTML5.

О дополнительных типах можно почитать [тут](http://htmlbook.ru/html/%21doctype).

Элементы находящиеся внутри элемента `<html>`, образуют дерево документа - DOM (document object model), тэг `<html>` является корневым элементом.

![./src/structure.png](./src/structure.png)

Пример структуры HTML-документа

Двумя дочерними узлами HTML-документа являются `<head>` и `<body>`. Поговорим о них подробнее.

Тег `<head>` предназначен для хранения других элементов, цель которых — помочь браузеру в работе с данными. Он может содержать в себе:

- [`<link>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/link) - подключение сторонних файлов, кроме скриптов. Ими могут быть стили, шрифты, favicon (иконка сайта, что отображается во вкладке и в закладках);
- [`<meta>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta) - мета-данные (данные о данных), обычно в них указывают кодировку, описание и ключевые слова для поисковых систем, автора документа и настройки viewport;
- [`<title>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/title) - обязательный тег, в котором находится название документа, которое отображается во вкладке браузера;
- [`<script>`](https://developer.mozilla.org/ru/docs/Web/HTML/Element/script) - подключение js-скриптов. Это подключение возможно так же и внутри `<body>`.

В теге `<body>` содержится тело документа.

## Типы тегов

До появления HTML5 разделяли всего два типа элементы - блочные и строчные.

1. Блочные - элементы высокого уровня. Могут включать в себя другие блочные и строчные теги. Формируют новый блок контента. Это элементы `<div>`, `<p>`, `<h1>` - `<h6>`, списки (`<ul>`, `<ol>`), элементы списка - `<li>` и так далее.

    Единственный элемент, внутрь которого нельзя вставлять другие блочные элементы, это параграф - `<p>`. Блочные элементы занимают всю ширину своего родителя (контейнера), формально создавая «блок» (отсюда и название);

2. Строчные элементы не могут включать в себя блочные элементы. Используются для разметки частей содержимого элементов. В отличии от блочных элементов не создают новый блок контента, а их ширина и высота зависят от контента.

## Контентная модель HTML

![./src/content.png](./src/content.png)

Контентная модель HTML5

С приходом HTML 5 была предложена классификация относительно содержимого. Каждый элемент может принадлежать нескольким категориям или не принадлежать ни одной.

Контентная модель (content model), или модель содержимого, описывает, какой тип содержимого следует ожидать внутри элемента и какие элементы могут быть вложены в другие элементы.

### Основные категории содержимого

1. Мета содержимое. Данные о данных, о них мы говорили выше;

    Например, `<link>` ,`<script>`, `<style>`, `<template>`, `<title>`

2. Потоковое содержимое. Большинство элементов используемых в теле документов;

    `<h1>` - `<h6>`, `<select>`, `<section>` и так далее

3.  Секционное содержимое. Теги `<article>`, `<aside>`, `<nav>`, `<section>`
4. Заголовочное содержимое. Теги `<h1>` - `<h6>`
5. Текстовое содержимое - элементы для разметки текста внутри абзацев;

    `<a>`, `<span>`, `<i>`, `<math>`  и так далее

6. Встроенное содержимое - то, что импортируется в документ из других источников;

    `<audio>` , `<img>`, `<svg>`, `<video>`, `<picture>`

7. Интерактивное содержимое - это то, что предполагает взаимодействие с пользователем.

    `<input>`, `<button>`, `<a>` (если присутствует атрибут `href`), `<select>`, `<video>` и так далее


Важно использовать теги по их прямому назначению. Это помогает поисковым системам выделять нужную информацию, а пользователям, которые по тем или иным причинам не могут читать, использовать скринридер (экранное считывающее устройство).

Проверить свою вёрстку всегда можно валидатором, он укажет ошибки, которые следует исправить, чтобы вёрстка соответствовала текущей спецификации.

## Основные атрибуты

- id - однозначный идентификатор элемента;
- class - идентификатор элемента. Не является уникальным, можно указывать несколько классов через пробел;
- href - атрибут элемента `<a>`, в нём указывают url по которому будет осуществлён переход по клику на `<a>`;
- src - атрибут элементов `<img>`, `<video>`, `<audio>` в нём указывают путь до источника;
- alt - текст, который будет отображен, если элемент не загрузился. Атрибут применим только к тегу `<img>`;
- title - текст, который будет показан при наведении курсора на элемент;
- style - CSS для конкретного элемента

Пример того, как атрибуты представленные выше могут использоваться в верстке:

```html
...
<article id="korgi-article" class="class1 class2">
	<img src="images/korgi.jpg" alt="Здесь изображен прекрасный корги" title="Собака" />
	<div
			class="image-caption"
		  title="здесь очень длинный текст"
			style="padding: 6px; text-align: center; color: orange;">
		Тут тоже очень длинный текст, который может не поместиться
	</div>
</article>
...
```

## Дополнительные ссылки

- [Валидатор W3C](https://validator.w3.org/)
- [Типы документов](https://www.w3schools.com/tags/tag_doctype.asp)
- [Подробнее про подключение скриптов](https://learn.javascript.ru/script-async-defer)
- [Про адаптивность сайтов для людей с ограниченными возможностями](https://weblind.ru/)
- Для сильных духом - [спецификация HTML 5.2](https://html.spec.whatwg.org/).