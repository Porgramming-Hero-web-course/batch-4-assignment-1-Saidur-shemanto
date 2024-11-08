interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (param1: Profile, param2: Partial<Profile>): Profile => {
  return { ...param1, ...param2 };
};

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
