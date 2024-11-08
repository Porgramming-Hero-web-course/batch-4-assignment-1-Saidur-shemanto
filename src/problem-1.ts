const sumArray = (params: Array<number>): void => {
  let result = 0;
  for (const i of params) {
    result += i;
  }
  console.log(result);
};

sumArray([1, 2, 3, 4, 5]);
