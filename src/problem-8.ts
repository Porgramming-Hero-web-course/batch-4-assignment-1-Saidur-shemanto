{
  type TUserProfile = {
    name: string;
    age: number;
    email: string;
  };
  const validateKeys = (obj: TUserProfile, keys: string[]): boolean => {
    for (const i of keys) {
      if (obj[i as keyof TUserProfile]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  //sample input :-
  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  console.log(validateKeys(person, ["name", "age"]));
}
