import App from './App';
import {render} from '@testing-library/react';
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const puppeteer = require('puppeteer');

const customConfig = { threshold: 0 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: customConfig,
  noColors: true,
});

let browser;

beforeAll(async () => {
  browser = await puppeteer.launch();
});

expect.extend({ toMatchImageSnapshot });


describe('Сетка', () => {
   it('Верстка не тронута', () => {
      const {container} = render(<App/>);
      expect(container).toMatchSnapshot();
   })

   async function removeBanners(page){
      await page.evaluate(() => {
        (document.querySelectorAll('.flex-container') || []).forEach(el => el.remove());
      });
    }

    it('renders correctly', async () => {
      const page = await browser.newPage();
      await page.goto('http://localhost:3000');

      await removeBanners(page);

      const image = await page.screenshot();

      expect(image).toMatchImageSnapshot();
    });
});