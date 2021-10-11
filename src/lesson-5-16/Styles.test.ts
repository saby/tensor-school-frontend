import {hasClass, addClass, removeClass, toggleClass} from './Styles';

describe('Урок 5.16 - Стили', () => {
   describe('Проверка работы функции hasClass', () => {
      afterEach(() => {
         document.body.innerHTML = '';
         document.body.className = '';
      });

      it('Проверка работы функции hasClass на существование', () => {
         document.body.className = 'red green blue';
         expect(hasClass(document.body, 'red')).toBe(true);
      });

      it('Проверка работы функции hasClass на отсутствие', () => {
         document.body.className = 'red green blue';
         expect(hasClass(document.body, 'orange')).toBe(false);
      });
   })

   describe('Проверка работы функции addClass', () => {
      afterEach(() => {
         document.body.innerHTML = '';
         document.body.className = '';
      });

      it('Проверка работы функции addClass при наличии классов', () => {
         document.body.className = 'red green blue';
         addClass(document.body, 'orange');
         expect(document.body.className.trim().split(' ').sort().join(' ')).toBe('blue green orange red');
      });

      it('Проверка работы функции addClass при отсутствии классов', () => {
         addClass(document.body, 'orange')
         expect(document.body.className.trim()).toBe('orange');
      });
   })

   describe('Проверка работы функции removeClass', () => {
      afterEach(() => {
         document.body.innerHTML = '';
         document.body.className = '';
      });

      it('Проверка работы функции removeClass при наличии классов', () => {
         document.body.className = 'red green blue';
         removeClass(document.body, 'red');
         expect(document.body.className.trim().split(' ').sort().join(' ')).toBe('blue green');
      });

      it('Проверка работы функции removeClass при отсутствии классов', () => {
         removeClass(document.body, 'red')
         expect(document.body.className.trim()).toBe('');
      });
   })

   describe('Проверка работы функции toggleClass', () => {
      afterEach(() => {
         document.body.innerHTML = '';
         document.body.className = '';
      });

      it('Проверка работы функции toggleClass при наличии классов', () => {
         document.body.className = 'red green blue';
         toggleClass(document.body, 'red');
         expect(document.body.className.trim().split(' ').sort().join(' ')).toBe('blue green');
      });

      it('Проверка работы функции toggleClass при отсутствии классов', () => {
         toggleClass(document.body, 'red')
         expect(document.body.className.trim()).toBe('red');
      });
   })
});
