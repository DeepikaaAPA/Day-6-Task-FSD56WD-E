class address {
    constructor(street, city, state, pin) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.pin = pin;
    }
  }
  class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    intro() {
      console.log(
        `Hi I am ${this.name} ,${this.age} years old from ${this.address.city},${this.address.state}`
      );
    }
  }
  let a1 = new address("Ganhi nagar", "Cbe", "TN", 642125);
  let a2 = new address("Nehru nagar", "Madurai", "TN", 635871);
  const p1 = new Person("Arun", "34", a1);
  p1.intro();

  let p2 = new Person("Kavi", 45, a2);
  p2.intro();

  /*
  Hi I am Arun ,34 years old from Cbe,TN
  Hi I am Kavi ,45 years old from Madurai,TN
  */
