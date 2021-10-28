# Отладка HTML и CSS
## Elements
### Просмотр DOM-дерева
На вкладке Elements выводится DOM-дерево элементов.     
Любые элементы можно добавлять, редактировать и удалять.

При выделении элемента в дереве - в консоли доступно обращение к элементу через $0. 

Удобный поиск по Ctrl+F с выделением совпадения.

Редактирование тегов и атрибутов.
Перетаскивание элементов.

Принудительная установка псевдостостояний hover, active и т.д. элементе.

Скрытие элемента по H.

Ctrl + Z.

## CSS

Perhaps you’d like to quickly check the width and height of an image, or an advertising spot. But rather than taking a screenshot, or inspecting element and copy/pasting width and height values, you can use a rules to measure the size of a component. Rules are provided all across modern browsers, but Firefox DevTools also allows you to measure a portion of the page. You can find the measurement tool on the right hand side of DevTools, right next to the “Responsive mode” icon.

In general, Firefox DevTools are heavily underrated. Another remarkable feature that Firefox provides is an option to filter all styles by a particular property (indicated with a filter icon). For example, if you notice that some styles are overwritten by other ones scattered somewhere across the stylesheet, you can hide all the definitions that don’t affect that particular property with a quick filter and see where exactly overrides are happening.

Also, on a given page, you can highlight all instances that match a particular selector. For example, if you notice a bug with a rendering of profile images on dark and light sections of the page, you can highlight all instances of a particular class without manually searching for them or adding extra styles to highlight them. It’s enough to locate the selector in Styles panel and choose a target icon to “highlight all elements matching this selector”.

In the “Styles” panel, Firefox also explains which CSS properties aren’t affecting the selected element and why, along with recommendations of what might help to fix the issue or avoid unexpected behavior (the feature is called Inactive CSS).


### Computed
### Event listeners

Grid editor
https://developer.chrome.com/blog/new-in-devtools-92/#grid-editor
