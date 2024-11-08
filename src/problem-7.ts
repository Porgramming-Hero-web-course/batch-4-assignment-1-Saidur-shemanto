class Car {
  make: string;
  model: string;
  age: number;
  currentYear: number;
  getCarAge() {
    console.log(
      `${this.currentYear - this.age} (assuming current year is ${
        this.currentYear
      })`
    );
  }
  constructor(
    make: string,
    model: string,
    age: number,
    currentYear: number = new Date().getFullYear()
  ) {
    this.make = make;
    this.model = model;
    this.age = age;
    this.currentYear = currentYear;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
