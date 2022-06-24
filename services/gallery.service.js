// const fs = require('fs').promises;
const fs = require('fs');

const dir = "../images/";
const readGalleryImage = async (filename) => {
  // const data = await fs.readFile("monolitic.txt", "binary");
  // return Buffer.from(data);
  var files = fs.readdirSync(dir);
  return files;
};

module.exports = {
  readGalleryImage,
}