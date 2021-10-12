import {render} from "@testing-library/react";
import App from './App';

describe('HTML', () => {
   it('Соответствие количества заголовков первого уровня', () => {
      const {container} = render(<App/>);

      expect(container.querySelectorAll('h1')?.length).toBe(1);
   });

   it('Соответствие количества заголовков второго уровня', () => {
      const {container} = render(<App/>);

      expect(container.querySelectorAll('h2')?.length).toBe(1);
   });

   it('Соответствие количества элементов списка', () => {
      const {container} = render(<App/>);

      expect(container.querySelectorAll('ul')?.length).toBe(1);
      expect(container.querySelectorAll('li')?.length).toBe(3);
   });

   it('Соответствие количества ссылок', () => {
      const {container} = render(<App/>);

      expect(container.querySelectorAll('li > a')?.length).toBe(3);
   });

   it('Все ссылки куда-то ведут', () => {
      const {container} = render(<App/>);
      const links = Array.from(container.querySelectorAll('li > a'))

      expect(links.every((link) => link.getAttribute('href'))).toBe(true);
   });
});
