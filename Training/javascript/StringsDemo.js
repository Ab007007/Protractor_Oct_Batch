const fn = "Aravinda"
const ln = "HB"
const birthYear = 1984
let currentYear = 2021


const usrInfo = `i'm ${fn} ${ln}, and i'm ${currentYear - birthYear} years Old`

console.log(usrInfo);

console.log(`Character at index 2 ${fn.charAt(2)}`);
console.log(`Index of char A ${fn.indexOf("a")}`);
console.log(`Index of char A ${fn.lastIndexOf("a")}`);

console.log(`Trim ${fn.trim()}`);
console.log(fn.toUpperCase());
console.log(fn.toLowerCase());