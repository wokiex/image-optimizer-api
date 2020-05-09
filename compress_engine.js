const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngQuant = require("imagemin-pngquant");

compressModule = {};

compressModule.compressJPEG = async function compressJPEG(filePath, destinationPath) {
    let startTime = Date.now()
    const files = await imagemin(
        [filePath], {
            destination: destinationPath,
            plugins: [
                imageminMozjpeg({quality: 50}),
                imageminPngQuant()
            ]
        }
    );
    if(process.env.NODE_ENV === "development"){
        console.log(files);
    }
    if(files.length === 0){
        console.log("Error in JPEG Image Compression")
        return
    } else {
        return(Date.now() - startTime);
    }
};
module.exports = compressModule;