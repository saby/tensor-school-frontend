import {createButton, createList, createLink} from './Events';

describe('Урок 5.17 - События', () => {
   describe('Создание и удаление кнопки по клику', () => {
      afterEach(() => {
         document.body.innerHTML = '';
      });

      it('Создана кнопка в body "Удали меня"', () => {
         createButton();
         expect(document.body).toMatchSnapshot();
      });

      it('Клик по кнопке "Удали меня"', () => {
         createButton();
         document.body.getElementsByTagName('button')[0].click();
         expect(document.body).toMatchSnapshot();
      });
   });

   describe('Создание списка и запись атрибута по наведению', () => {
      afterEach(() => {
         document.body.innerHTML = '';
      });

      it('Создан список в body из элементов массива', () => {
         createList(['нулевой элемент', 'первый элемент', 'второй элемент']);
         expect(document.body).toMatchSnapshot();
      });

      it('Наведение мыши на элементы списка', () => {
         const arr = ['нулевой элемент', 'первый элемент', 'второй элемент'];
         createList(arr);

         function triggerEvent(el: HTMLElement, type: string): void {
            if ('createEvent' in document) {
               var e = document.createEvent('HTMLEvents');
               e.initEvent(type, false, true);
               el.dispatchEvent(e);
            }
         }

         for (let i = 0; i < arr.length; i++) {
            triggerEvent(document.body.getElementsByTagName('li')[i], 'mouseover');
         }

         expect(document.body).toMatchSnapshot();
      });
   });

   describe('Создание ссылки и кликов по ней', () => {
      afterEach(() => {
         document.body.innerHTML = '';
      });

      it('Создана ссылка "tensor" в body', () => {
         createLink();
         expect(document.body).toMatchSnapshot();
      });

      it('Первый клик по ссылке "tensor"', () => {
         createLink();
         document.body.getElementsByTagName('a')[0].click();
         expect(document.body).toMatchSnapshot();
      });

      it('Второй клик по ссылке "tensor"', () => {
         createLink();
         document.body.getElementsByTagName('a')[0].click();
         document.body.getElementsByTagName('a')[0].click();
         expect(document.location.href).toEqual("https://tensor.ru/");
      });
   });
});
