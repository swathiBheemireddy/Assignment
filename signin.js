"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
var chrome_1 = require("selenium-webdriver/chrome");
var chromeOptions = new chrome_1.Options();
chromeOptions.addArguments('--headless'); // Run Chrome in headless mode (without GUI)
chromeOptions.addArguments('--disable-gpu'); // Disable GPU usage, as it may cause issues with headless mode
// Define reusable functions
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, username, usernameField, loginButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build()];
                case 1:
                    driver = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, , 8, 10]);
                    // Navigate to webpage
                    return [4 /*yield*/, driver.get('https://example.com/login')];
                case 3:
                    // Navigate to webpage
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('username'))];
                case 4:
                    username = _a.sent();
                    return [4 /*yield*/, username.sendKeys("swathi")];
                case 5:
                    _a.sent();
                    usernameField = driver.findElement(selenium_webdriver_1.By.name('password'));
                    return [4 /*yield*/, usernameField.sendKeys("swathi")];
                case 6:
                    _a.sent();
                    loginButton = driver.findElement(selenium_webdriver_1.By.css('.login-btn'));
                    return [4 /*yield*/, loginButton.click()];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 10];
                case 8: 
                // Close the browser
                return [4 /*yield*/, driver.quit()];
                case 9:
                    // Close the browser
                    _a.sent();
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    });
}
main();
