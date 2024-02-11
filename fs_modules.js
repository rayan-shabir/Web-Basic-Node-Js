const fs = require('fs');

// Reading From a File
let a = fs.readFileSync('file.txt');
console.log(a.toString());

fs.readFile('file.txt', 'utf-8', (err, data)=>{
    console.log(err, data);
})

console.log("Reading Finsished...");

// Writing to a File
let str = "This is File2"

fs.writeFileSync('file2.txt', "This is another File");

fs.writeFile('file2.txt', str, ()=>{
    console.log("Writing to a file");
});

console.log("Writing Finished...");