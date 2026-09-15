// type User = {
//   name: string;
//   email: string;
//   age: number;
// };
export {};
// class Info implements User {
//   name = "Vansh";
//   email = "vansh@gmail.com";
//   age = 23;
// }
// class Info implements User {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
//---------Incorrect Way-------------
// type Role = "ADMIN" | "USER";
// class LMS implements Role{
// }
//-----------------
// type Subscribed = { active: true } | { active: false };
// class LMS implements Subscribed{
//     active: boolean = true
// }
//------------Correct Ways--------------
// type Role = { user: "STUDENT" | "ADMIN" };
// class LMS implements Role {
//   user: "STUDENT" | "ADMIN" = "STUDENT";
// }
//-------------------
// type Subscribed = { active: true | false };
// class LMS implements Subscribed {
//   active: boolean = true;
// }
// interface Subscribed {
//   active: true | false;
// }
// class LMS implements Subscribed {
//   active: boolean = true;
// }
//------------------
// interface Role {
//   user: "STUDENT" | "ADMIN";
// }
// class LMS implements Role {
//   user: "STUDENT" | "ADMIN" = "STUDENT";
// }
//-----------------
// interface DisplayInfo {
//   (name: string, email: string): string;
// }
// const displayInfo: DisplayInfo = (name, email) => {
//   return `Name: ${name}  Email: ${email}`;
// };
// console.log(displayInfo("Vansh", "vansh@gmail.com"));
//---------------------------
// interface Car {
//   start(): void;
//   stop(): void;
// }
// const car: Car = {
//   start() {
//     console.log("Starting Car...");
//   },
//   stop() {
//     console.log("Stopping Car...");
//   },
// };
// car.start();
// car.stop();
//------------------------------
// interface User {
//   [data: string]: string;
// }
// const user: User = {
//   name: "Vansh",
//   email: "vansh@gmail.com",
// };
// interface Duplicate {
//   [val: number]: number;
// }
// const dup: Duplicate = {
//   45: 10,
//   90: 2,
// };
// console.log(dup[45]);
// console.log(dup[90]);
//------------------------------
// interface User {
//   name: string;
//   email: string;
// }
// interface User {
//   age: number;
// }
// const user: User = {
//   name: "Vansh",
//   email: "vansh@gmail.com",
//   age: 23,
// };
// console.log(user);
//--------------------------------
// interface A {
//   name: string;
//   email: string;
// }
// interface B {
//   age: number;
// }
// interface C extends A, B {
//   isValid: boolean;
// }
// const user: C = {
//   name: "Vansh",
//   email: "vansh@gmail.com",
//   age: 23,
//   isValid: true,
// };
//# sourceMappingURL=interfaceType.js.map