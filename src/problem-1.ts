const sumArray = (params: Array<number>): void => {
  let result: number = 0;
  for (const i of params) {
    result += i;
  }
  console.log(result);
};

//sample Input
sumArray([1, 2, 3, 4, 5]);
