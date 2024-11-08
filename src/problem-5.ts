type Property = {
  name: string;
  age: number;
};
const getProperty = <T>(param1: T, param2: keyof T) => {
  return param1[param2];
};
//sample input:-
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
