let student = {
  firstName: "Afsana",
  lastName: "Talibova",
  
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    let parts = value.split(" "); 
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

student.fullName = "Lale Huseynova";
console.log(student.fullName); 
console.log(student.firstName);
console.log(student.lastName); 





let product = {
  name: "Book",
  priceUSD: 10,

  get priceAZN() {
    return this.priceUSD * 1.7;
  }
};

console.log(product.name + " qiyməti: " + product.priceAZN + " AZN");

