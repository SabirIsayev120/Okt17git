let originalArray = [2, 4, 6, 8, 10];


let newArray = [...originalArray];


newArray = neeArray.map(num => num * 2);


console.log("Orijinal massiv:", originalArray);
console.log("Yeni massiv:", newArray);


if (JSON.stringify(originalArray) === JSON.stringify([2, 4, 6, 8, 10])) {
    console.log(" Orijinal massiv dəyişməyib.");
} else {
    console.log(" Orijinal massiv dəyişib.");
}
