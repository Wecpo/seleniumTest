const { Builder, By } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

async function test(url) {
  try {
    await driver.get(url);
    console.log("Страница успешно открыта");
    await driver.sleep(1000);
  } catch (error) {
    console.log(`Ошибка ${error}`);
  }
  try {
    // Заполнение LOGIN
    let loginField = await driver.findElement(By.id("login"));
    await loginField.sendKeys("Maksim");
    console.log(`Поле login успешно заполнено`);
    await driver.sleep(1000);
  } catch (error) {
    console.log(`Ошибка заполнения поля login ${error}`);
  }
  try {
    // Заполнение PASSWORD
    let passwordField = await driver.findElement(By.id("password"));
    await passwordField.sendKeys("123456");
    console.log(`Поле password успешно заполнено`);
    await driver.sleep(1000);
  } catch (error) {
    console.log(`Ошибка заполнения поля password ${error}`);
  }
  try {
    // Чекбокс
    let checkboxField = await driver.findElement(By.id("checkbox"));
    await checkboxField.click();
    console.log(`Поле checkbox успешно заполнено`);
    await driver.sleep(1000);
  } catch (error) {
    console.log(`Ошибка checkbox ${error}`);
  }
  try {
    // SUBMIT
    let submitButton = await driver.findElement(By.id("submitButton"));
    await submitButton.click();
    console.log(`Форма отправлена успешно`);
    await driver.sleep(1000);
  } catch (error) {
    console.log(`Ошибка отправки формы ${error}`);
  }
}

test("http://127.0.0.1:51000/src/index.html");
