type Property = {
  name: string;
  age: number;
};
const getProperty = (param1: Property, param2: keyof Property) => {
  return param1[param2];
};

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
