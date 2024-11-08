class Car {
  make: string;
  model: string;
  age: number;
  currentYear: number;

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
  getCarAge() {
    console.log(
      `${this.currentYear - this.age} (assuming current year is ${
        this.currentYear
      })`
    );
  }
}
//sample input :-
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
