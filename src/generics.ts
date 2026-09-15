// function data<T>(item: T): T[] {
//   return [item];
// }

// console.log(data("Vansh"));
// console.log(data({ name: "Vansh", email: "vansh@gmail.com" }));

//---------------------------------------

// function getData<T>(items: T[]) {
//   return items;
// }

// console.log(
//   getData([
//     { name: "Vansh", email: "vansh@gmail.com" },
//     { name: "Aman", email: "aman@gmail.com" },
//   ]),
// );

// console.log(getData(["Vansh", "Aman", "Rahul"]));

//---------------------------------------

// function display<A, B>(a: A, b: B): [A, B] {
//   return [a, b];
// }

// console.log(display("Vansh", "vansh@gmail.com"));
// console.log(display("Vansh", { email: "vansh@gmail.com", age: 23 }));

//---------------------------------------

// interface User<T> {
//   data: T[];
// }

// // const user: User<object> = {
// //   data: [
// //     { name: "Vansh", email: "vansh@gmail.com" },
// //     { name: "Aman", email: "aman@gmail.com" },
// //     { name: "Rahul", email: "rahul@gmail.com" },
// //   ],
// // };

// // console.log(user);

// const users: User<string> = {
//   data: ["Vansh", "Aman"],
// };

// console.log(users);

//------------------------------------------

interface User<T> {
  isActive: boolean;
  data: T;
}

const user: User<{ name: string; age: number }> = {
  isActive: true,
  data: { name: "Vansh", age: 23 },
};

console.log(user);
