let meyveler = ["alma", "armud", "banan"];
meyveler.push("üzüm")
console.log("push:", meyveler);
meyveler.unshift("nar")
console.log("unshift:", meyveler);
let soilinmiş1 = meyveler.pop()
console.log("pop", meyveler, "| silinən:", silinmiş1);

let silinmiş2 = meyveler .shift();
console.log("shift:",meyveler,"| silinən", silinmiş2);


let metn = "32,31,34,36,31";
let new = metn.split(",").join(";");
console.log(new);
