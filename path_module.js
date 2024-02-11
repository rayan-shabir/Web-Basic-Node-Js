const path = require("path");

const b = path.basename('C:\\temp\\myfile.html');
console.log(b);

const d = path.dirname('C:\\temp\\myfile.html');
console.log(d);

const extension = path.extname(__filename);
console.log(extension);