console.log('Welcome to your garage!');

class Vehicle {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk() {
        console.log("BEEP!")
    }
    toString() {
        console.log(`You own a ${this.year} ${this.make} ${this.model}!`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2
    }
    revEngine() {
        console.log("VROOM!")
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = []
    }
    add(vehicle) {
        if (vehicle.make && vehicle.model && vehicle.year) {
            if (this.vehicles.length >= this.capacity) {
                console.log("We're sorry... the garage is full");
                return
            }
        } else {
            console.log("Only vehicles are allowed in here!");
            return
        }
        this.vehicles.push(vehicle)
        console.log(`Your ${vehicle.make} has been added to your garage!`);
    }
}

//  ****  Boiler-plate Tester Calls for Exercise ****
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."
let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2
let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."