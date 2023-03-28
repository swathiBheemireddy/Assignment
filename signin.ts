
import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

const chromeOptions = new Options();
chromeOptions.addArguments('--headless'); // Run Chrome in headless mode (without GUI)
chromeOptions.addArguments('--disable-gpu'); // Disable GPU usage, as it may cause issues with headless mode

// Define reusable functions
async function main() {
	const driver: WebDriver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

	try {
		// Navigate to webpage
		await driver.get('https://example.com/login');

		//const loginCredentials = await getLoginCredentials(username);

		const username = await driver.findElement(By.name('username'));
		await username.sendKeys("swathi");

		// Fill in username and password fields
		const usernameField = driver.findElement(By.name('password'));
		await usernameField.sendKeys("swathi");


		// Click the login button
		const loginButton = driver.findElement(By.css('.login-btn'));
		await loginButton.click();
	}
	finally {
		// Close the browser
		await driver.quit();
	}
}
main();