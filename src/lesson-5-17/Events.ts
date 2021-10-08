/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton(): void {
   document.body.insertAdjacentHTML('afterbegin', '<button>Удали меня</button>');
   document.body.getElementsByTagName('button')[0].addEventListener('click', (e) => {
      e.target.remove();
   });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr: string[]): void {
   let ul = document.createElement('ul');
   document.body.appendChild(ul);

   for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.textContent = arr[i];
      li.addEventListener('mouseover', () => li.setAttribute('title', arr[i]))
      ul.appendChild(li);
   }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink(): void {
   let counter = 0;
   document.body.insertAdjacentHTML('afterbegin', '<a href="https://tensor.ru/">tensor</a>');
   document.body.getElementsByTagName('a')[0].addEventListener('click', (e) => {
      if (counter === 0) {
         counter++;
         e.preventDefault();
         e.target.innerHTML = e.target.innerHTML + ' ' + e.target.href;
      }
   });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList(): void {
   let ul = document.createElement('ul');
   let button = document.createElement('button');
   button.textContent = 'Добавить пункт';

   document.body.appendChild(ul);
   document.body.appendChild(button);

   const addLi = function () {
      ul.insertAdjacentHTML('beforeend', '<li>Пункт</li>');
   }
   addLi();

   button.addEventListener('click', addLi);
   ul.addEventListener('click', (e) => {
       if (e.target && e.target.nodeName === 'LI') {
          e.target.innerHTML = e.target.innerHTML + '!';
       }
   });
}
