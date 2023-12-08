const Tesseract = require('tesseract.js');
const performOCRWithTimeout = require('./ocrFunction');

describe('performOCRWithTimeout', () => {
  test('should recognize text successfully from a local PNG file', async () => {
    const filePath = './test-screen.png'; // Update with your file path
    const language = 'nor';
    const timeout = 5000; // 5 seconds

    try {
      const result = await performOCRWithTimeout(filePath, language, timeout);

      // Assertions
      console.log('Recognized Text:', result);
      expect(result).toBeTruthy(); // Assuming some text is recognized
    } catch (error) {
      // Handle OCR errors or timeouts
      console.error('OCR Error:', error.message);
      throw error; // Rethrow the error for the test to fail
    }
  });

  test('should handle OCR timeout', async () => {
    const filePath = './test-screen.png'; // Update with your file path
    const language = 'nor';
    const timeout = 100; // 100 milliseconds for faster testing

    try {
      await performOCRWithTimeout(filePath, language, timeout);

      // If OCR completes within the timeout, the test should fail
      throw new Error('OCR did not time out as expected');
    } catch (error) {
      // Expecting an error due to the OCR timeout
      expect(error.message).toBe('OCR timeout');
    }
  });
});
