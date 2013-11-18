function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.showCar = showCar;

  function showCar() {
    var result = "I just bought a " + this.year + " " + this.make
      + " " + this.model + " " + "for $120,000!  What a deal!";
    console.log(result);
  }
}

var mycar = new Car("Ferrari", "F430", "2012");
console.log(mycar);

mycar.showCar();
