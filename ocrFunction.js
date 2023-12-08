const Tesseract = require('tesseract.js');
const sharp = require('sharp');
const fs = require('fs');

async function performOCRWithTimeout(filePath, language, timeout) {
  // Read the image file
  const imageBuffer = fs.readFileSync(filePath);

  // Preprocess the image
  const preprocessedImageBuffer = await sharp(imageBuffer)
    .normalize()
    .median(2)
    .toBuffer();

  let recognizePromise = Tesseract.recognize(preprocessedImageBuffer, language, {
    psm: 10, // Experiment with different PSM values
  });

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('OCR timeout'));
    }, timeout);
  });

  try {
    const result = await Promise.race([recognizePromise, timeoutPromise]);
    return result.data.text;
  } catch (error) {
    throw error;
  }
}

module.exports = performOCRWithTimeout;
