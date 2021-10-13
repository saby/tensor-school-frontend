import App from './App';
import { render } from '@testing-library/react';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import puppeteer, { Page, Browser } from 'puppeteer';
import path from 'path';

const customConfig = { threshold: 0 };
const toMatchImageSnapshot = configureToMatchImageSnapshot({
    customDiffConfig: customConfig,
    noColors: true
});
expect.extend({ toMatchImageSnapshot });

let browser: Browser;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: true
    });
});

afterAll(async () => {
    await browser.close();
});

describe('Сетка', () => {
    it('Верстка не тронута', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    async function removeBanners(page: Page) {
        await page.evaluate(() => {
            document.querySelectorAll('.grid-container').forEach((el) =>
                el.remove()
            );
        });
    }

    it('renders correctly', async () => {
        const page = await browser.newPage();
        await page.goto(`file:${path.join(__dirname, 'index.html')}`);

        await removeBanners(page);

        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
