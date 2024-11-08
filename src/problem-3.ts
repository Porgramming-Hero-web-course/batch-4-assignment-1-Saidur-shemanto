const countWordOccurrences = (sentence: string, word: string): void => {
  let count: number = 0;
  for (const i of sentence.split(" ")) {
    if (i.toLowerCase() === word.toLowerCase()) {
      count += 1;
    } else {
      continue;
    }
  }
  console.log(count);
};

countWordOccurrences("I love typescript TypeScript typeScript", "typescript");
