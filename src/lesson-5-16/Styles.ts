/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

export function hasClass(elem: HTMLElement, elemClass: string): boolean {
   return elem.classList.contains(elemClass);
}

export function addClass(elem: HTMLElement, elemClass: string): void {
   elem.classList.add(elemClass);
}

export function removeClass(elem: HTMLElement, elemClass: string): void {
   elem.classList.remove(elemClass);
}

export function toggleClass(elem: HTMLElement, elemClass: string): void {
   elem.classList.toggle(elemClass);
}
