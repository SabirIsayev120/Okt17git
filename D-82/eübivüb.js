let totalSum = 0;

for (let i = 10; i <= 99; i++) {
  if (i % 2 !== 0) {
    totalSum += i;
  }
}

console.log(`Bütün ikirəqəmli tək ədədlərin cəmi: ${totalSum}`);