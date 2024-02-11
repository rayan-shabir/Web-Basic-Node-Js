// Common JS Modules --> Exporting File

function simple() {
    console.log("Simple is Complex");
}

let a = 56;

function sum(a) {
    return a + 5;
}

// Exporting 1 element
// module.exports = simple;

// Exporting more than 1 element
module.exports = {simple, a, sum};