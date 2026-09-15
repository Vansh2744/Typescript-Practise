const arr1: string[] = ["Vansh", "Aman"];

const arr: number[][] = [
  [12, 34, 56],
  [23, 45, 67],
];

// const arr2: Array<string> = ["Vansh", "Aman"];

const arr2: Array<Array<number>> = [
  [1, 2, 3],
  [1, 3, 4],
];

console.log(arr2);

type User = {
  name: string;
  email: string;
};

const arr3: User[] = [
  { name: "Vansh", email: "vansh@gmail.com" },
  { name: "Aman", email: "aman@gmail.com" },
  { name: "Kartik", email: "kartik@gmail.com" },
];

const arr4: readonly string[] = ["Vansh", "Rahul"];

//arr4.push("Kartik") // give error bcz arr4 is readonly

const arr5: [string, number] = ["Vansh", 34];

const arr6: [string, number, boolean?] = ["Vansh", 34];

const arr7: readonly [string, number] = ["Vansh", 23];

const arr8: [name: string, age: number] = ["Vansh", 23];
