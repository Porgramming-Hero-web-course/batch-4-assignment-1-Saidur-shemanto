const removeDuplicates = (params: Array<number>): void => {
  const unique: Array<number> = [];
  for (const i of params) {
    if (unique.includes(i)) {
      continue;
    } else {
      unique.push(i);
    }
  }
  console.log(unique);
};

//sample Input
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
