const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngQuant = require('imagemin-pngquant');

const compressModule = {};

compressModule.compressJPEG = async function compressJPEG(filePath, destinationPath) {
  const startTime = Date.now();
  const files = await imagemin(
    [filePath], {
      destination: destinationPath,
      plugins: [
        imageminMozjpeg({
          quality: 50,
        }),
        imageminPngQuant(),
      ],
    },
  );
  /* istanbul ignore if  */
  if (process.env.DEBUG === 'debug') {
    console.log(files);
  }
  if (files.length === 0) {
    return console.log('Error in Image Compression');
  }
  return (Date.now() - startTime);
};
module.exports = compressModule;
