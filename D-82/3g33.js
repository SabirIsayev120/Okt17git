function faktorialHesabla(eded) {
  if (eded < 0) {
    return "Xəta: Mənfi ədədin faktorialı yoxdur.";
  }
  if (eded === 0) {
    return 1;
  }
  let netice = 1;
  for (let i = 1; i <= eded; i++) {
    netice *= i;
  }
  return netice;
}

console.log(faktorialHesabla(5));
console.log(faktorialHesabla(0));



function sozleriBoyukleBaslat(cumle) {
  let sozler = cumle.split(' ');
  let yeniCumle = [];
  for (let i = 0; i < sozler.length; i++) {
    let soz = sozler[i];
    if (soz.length > 0) {
      yeniCumle.push(soz.charAt(0).toUpperCase() + soz.slice(1));
    }
  }
  return yeniCumle.join(' ');
}

let cumle = "bu bir nümunə cümlədir";
let cavab = sozleriBoyukleBaslat(cumle);
console.log(cavab);