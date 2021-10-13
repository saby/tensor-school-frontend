import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer, { Page, Browser } from 'puppeteer';
import path from 'path';

const customConfig = { threshold: 0 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    customDiffConfig: customConfig,
    noColors: true
});

let browser: Browser;

beforeAll(async () => {
    browser = await puppeteer.launch();
});

afterAll(async () => {
    await browser.close();
});

expect.extend({ toMatchImageSnapshot });

describe('Сетка', () => {
    let page: Page;
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto(`file:${path.join(__dirname, 'index.html')}`);
    });

    it('Верстка не тронута', async () => {
        const container = await page.evaluate(() => document.body.innerHTML);

        expect(container).toMatchSnapshot();
    });

    it('renders correctly', async () => {
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
