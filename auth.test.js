const { test, expect } = require('@playwright/test');

test('Наличие кнопки "Создать резюме"', async ({ page }, workerInfo) => {
  await page.goto('https://bezhetsk.hh.ru/');
  
  const button = page.locator('.supernova-navi-search-wrapper .supernova-button_tinted');

  await expect(button).toHaveText('Создать резюме');
  await page.screenshot({ path: `5_` + workerInfo.project.name + ` screen.jpg`})
});

test('Открытие страницы "Вход в личный кабинет"', async ({ page }) => {
    await page.goto('https://bezhetsk.hh.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await expect(page).toHaveTitle('Вход в личный кабинет');
    await page.getByRole('textbox', { name: "Электронная почта или телефон" }).fill('maks-nazarov-99@mail.ru');
    await page.getByRole('button', { name: "Продолжить" }).click();
});
