let meyvələr = ["ALma", "Armud", "Banana", "Nar"]
meyveler.array.forEach(function (meyve) => {
    console.log(meyve);


});
function printnegatives(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            console.log(numbers[i]);

        }

    }

}



printnegatives([2, -3, -2, 4, -1]);