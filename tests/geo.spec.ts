import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dokumentasjon.geodataonline.no/docs/Bakgrunnskart/Basis/');
  await page.getByRole('link', { name: 'Basis', exact: true }).click();
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 312,
      y: 246
    }
  });
  await page.frameLocator('iframe').getByLabel('Default map view').click();
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 183,
      y: 294
    }
  });
  await page.frameLocator('iframe').getByRole('application').click({
    position: {
      x: 183,
      y: 303
    }
  });
  await page.frameLocator('iframe').locator('canvas').dblclick({
    position: {
      x: 183,
      y: 303
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    clickCount: 4,
    position: {
      x: 183,
      y: 303
    }
  });
  await page.frameLocator('iframe').locator('canvas').dblclick({
    position: {
      x: 183,
      y: 303
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 86,
      y: 326
    }
  });
});
