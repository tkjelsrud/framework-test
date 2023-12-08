import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://developers.arcgis.com/javascript/latest/sample-code/featurereduction-cluster-filter-slider/');
  
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').locator('canvas').click({
    position: {
      x: 510,
      y: 211
    }
  });
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByLabel('Slider value').locator('span').first().click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByLabel('Slider value').locator('span').first().click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByLabel('Slider', { exact: true }).click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByText('Gas').click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByText('Gas').click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').locator('div:nth-child(4) > div > .esri-legend__symbol > div > svg > g > circle').first().click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByText('Gas').click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').locator('canvas').click({
    position: {
      x: 563,
      y: 315
    }
  });
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByRole('button', { name: 'Browse features' }).click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').locator('span').filter({ hasText: 'Cluster summary' }).click();
  await page.frameLocator('iframe[title="Clustering - advanced configuration"]').getByRole('button', { name: 'Zoom to' }).click();
});
