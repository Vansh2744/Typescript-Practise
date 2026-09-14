// const name: any = "Vansh";

// const len = (name as string).length;

// type User = {
//   name: string;
//   email: string;
//   age: number;
// };

// const user = '{"name":"Vansh","email":"vansh@gmail.com","age":23}';

// console.log((JSON.parse(user) as User).email);

//-----------------------------------------

// function getUsers() {
//   throw new Error("Unable to fetch users");
// }

// try {
//   getUsers();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log("Error", error);
//   }
// }

//-------------------------------------------

// const name: unknown = "Vansh";

// const newName: string = name as string;

// console.log(newName);

//-----------------never type----------------

function neverReturn(): never {
  while (true) {}
}

function getUser(): never {
  throw new Error("User not found");
}
