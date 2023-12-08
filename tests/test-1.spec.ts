import { test, expect } from '@playwright/test';
const Tesseract = require('tesseract.js');

test('test', async ({ page }) => {
  await page.goto('https://dokumentasjon.geodataonline.no/docs/3D/Terrengmodell/');
  await page.frameLocator('iframe').getByLabel('Enter fullscreen').click();
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 486,
      y: 525
    }
  });
  for(let i = 0; i < 10; i++) {
    await page.frameLocator('iframe').locator('canvas').dblclick({
      position: {
        x: 486,
        y: 525
      }
    });
  }
  await page.frameLocator('iframe').getByRole('button', { name: 'Vis kartlagsliste' }).click();
  await page.frameLocator('iframe').getByTitle('GeomapDTM').click();
  //await page.locator('body').dblclick();

  const screenshotBuffer = await page.screenshot();

  Tesseract.recognize(
    screenshotBuffer,
    'nor',
    {
      logger: (info) => console.log(info), // Optional: Log OCR progress
    }
  ).then(({ data: { text } }) => {
    console.log('Extracted Text:', text);
  });

});