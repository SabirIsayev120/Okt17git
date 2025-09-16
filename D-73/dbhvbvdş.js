console.log("5" + 3);     
// Nəticə: "53"
// Tip çevrilməsi: number → string

console.log("5" - 3);     
// Nəticə: 2
// Tip çevrilməsi: string → number

console.log(5 + true);    
// Nəticə: 6
// Tip çevrilməsi: boolean → number (true → 1)

console.log(5 + null);    
// Nəticə: 5
// Tip çevrilməsi: null → number (null → 0)

console.log("5" * "2");   
// Nəticə: 10
// Tip çevrilməsi: string → number

console.log("abc" * 2);   
// Nəticə: NaN
// Tip çevrilməsi: string → number 

let a = "123";     // string
let b = 456;       // number
let c = true;      // boolean
let d = "false";   // string  ("false")
let e = false;     // boolean
let f = null;      // object 

let x = "25";
let y = "true";
let z = 0;

console.log(Number(x));      // 25       → string → number
console.log(Boolean(y));     // true     → string "true" boş olmadığı üçün → true
console.log(String(z));      // "0"      → number → string

console.log(Boolean(""));         // false     → boş string → false
console.log(Boolean("hello"));    // true      → boş olmayan string → true
console.log(Boolean(0));          // false     → 0 → false
console.log(Boolean(1));          // true      → 1 → true
console.log(Boolean(undefined));  // false     → undefined → false
console.log(Boolean(null));       // false     → null → false