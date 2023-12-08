const puppeteer = require('puppeteer');
const Tesseract = require('tesseract.js');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://dokumentasjon.geodataonline.no/docs/3D/Terrengmodell/');
  await page.evaluate(() => {
    // Perform scrolling or other interactions on the page
  });

  // Capture a screenshot of the canvas
  const screenshotBuffer = await page.screenshot();

  // Perform OCR on the screenshot
  Tesseract.recognize(
    screenshotBuffer,
    'eng', // Language code (e.g., 'eng' for English)
    {
      logger: (info) => console.log(info), // Optional: Log OCR progress
    }
  ).then(({ data: { text } }) => {
    console.log('Extracted Text:', text);

    // Perform assertions or further processing based on the extracted text

    browser.close();
  });
})();

