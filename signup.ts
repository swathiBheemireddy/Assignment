//import puppeteer from 'puppeteer';
import * as puppeteer from "puppeteer-core";
import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

const chromeOptions = new Options();
chromeOptions.addArguments('--headless'); // Run Chrome in headless mode (without GUI)
chromeOptions.addArguments('--disable-gpu'); // Disable GPU usage, as it may cause issues with headless mode

//import { launch } from 'puppeteer';
//(async () => {
async function main() {
	const driver: WebDriver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

	// Launch a headless Chrome browser
	const browser = await puppeteer.launch();
	//const browser = await launch();
	// Open a new page and navigate to the Facebook signup page
	const page = await browser.newPage();
	await page.goto('https://www.facebook.com/signup');

	// Fill in the signup form
	await page.type('#firstname', 'swathi');
	await page.type('#lastname', 'bheemireddy');
	await page.type('#reg_email__', 'bheemireddyswathi2@gmail.com');
	await page.type('#reg_email_confirmation__', 'your_email@example.com');
	await page.type('#reg_passwd__', 'Swathi@24');
	await page.select('#birthday_day', '08');
	await page.select('#birthday_month', 'May');
	await page.select('#birthday_year', '1993');
	await page.click('[name="sex"][value="2"]');
	await page.click('#u_0_13');

	// Wait for the account creation process to complete
	await page.waitForNavigation();

	// Close the browser
	await browser.close();
}
main();
