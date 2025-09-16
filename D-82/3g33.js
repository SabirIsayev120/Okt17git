function faktorial(n) {
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}
console.log(faktorial(5)); 
