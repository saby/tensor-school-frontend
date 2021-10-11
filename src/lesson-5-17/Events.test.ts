import {createButton, createArrList, createLink, createList} from './Events';

describe('Урок 5.17 - События', () => {
   describe('1. Создание и удаление кнопки по клику', () => {
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

   describe('2. Создание списка и запись атрибута по наведению', () => {
      afterEach(() => {
         document.body.innerHTML = '';
      });

      it('Создан список в body из элементов массива', () => {
         createArrList(['нулевой элемент', 'первый элемент', 'второй элемент']);
         expect(document.body).toMatchSnapshot();
      });

      it('Наведение мыши на элементы списка', () => {
         const arr = ['нулевой элемент', 'первый элемент', 'второй элемент'];
         createArrList(arr);

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

   describe('3. Создание ссылки и кликов по ней', () => {
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

         interface ITestObj {
            testDefaultPrevented: boolean;
            testHref: string;
         }

         let testCounter = 0;
         let testObj: ITestObj = {
            testDefaultPrevented: false,
            testHref: ''
         };

         document.body.getElementsByTagName('a')[0].addEventListener('click', (e) => {
            testCounter++;

            if (testCounter < 2) {
               return;
            }

            // Второй клик
            testObj.testDefaultPrevented = e.defaultPrevented;
            testObj.testHref = e.target && e.target.getAttribute('href');

            expect(testObj).toEqual({
               testDefaultPrevented: false,
               testHref: 'https://tensor.ru/',
            });
         })

         document.body.getElementsByTagName('a')[0].click();
         document.body.getElementsByTagName('a')[0].click();
      });
   });

   describe('4. Создание списка, кнопки и кликов по ним', () => {
      afterEach(() => {
         document.body.innerHTML = '';
      });

      it('Создан список и кнопка', () => {
         createList();
         expect(document.body).toMatchSnapshot();
      });

      it('Клик по элементу списка', () => {
         createList();
         document.body.getElementsByTagName('li')[0].click();
         expect(document.body).toMatchSnapshot();
      });

      it('Клик по кнопке', () => {
         createList();
         document.body.getElementsByTagName('button')[0].click();
         expect(document.body).toMatchSnapshot();
      });

      it('Клик по созданному по кнопке элементу списка', () => {
         createList();
         document.body.getElementsByTagName('button')[0].click();
         document.body.getElementsByTagName('li')[1].click();
         expect(document.body).toMatchSnapshot();
      });
   });
});
