class Uber {
  constructor(distance, vehicle = "Car") {
    this.distance = distance;
    this.vehicle = vehicle;
    this.minFare = 40;
  }
  calculatePrice() {
    this.priceEstimate = this.minFare + this.distance * this.getVehicleFare();
  }

  getPriceEstimate() {
    this.calculatePrice();
    return this.priceEstimate.toFixed(2);
  }

  getVehicleFare() {
    switch (this.vehicle) {
      case "Car":
        return 40;
      case "Bike":
        return 26;
    }
  }
  updateVehicle(vehicle) {
    this.vehicle = vehicle;
  }
}

let u = new Uber(100);
console.log(
  `Price for ${u.distance}km by ${u.vehicle} is :Rs.${u.getPriceEstimate()}`
);
u.updateVehicle("Bike");
console.log(
  `Price for ${u.distance}km by ${u.vehicle} is :Rs.${u.getPriceEstimate()}`
);

/*
  Price :Rs.2585.00
  Updated Price :Rs.2575.00
  */
