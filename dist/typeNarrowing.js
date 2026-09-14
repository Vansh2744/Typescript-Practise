"use strict";
// function displayUser(name: string, phone: string | number) {
//   if (typeof phone === "string") {
//     console.log(`Calling String type phone : ${name}`);
//   } else {
//     console.log(`Calling Number type phone : ${name}`);
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let access: string | undefined;
// function dashboard(role: "USER" | "ADMIN" | "MEMBER") {
//   if (role === "ADMIN") {
//     access = "Full Access";
//   }
//   return `You Can Access all ${role} Features`;
// }
// class Auth {
//   validateUser() {
//     console.log("Validating Auth User...");
//   }
// }
// class Payment {
//   validateUser() {
//     console.log("Validating Payment User...");
//   }
// }
// function validate(method: Auth | Payment) {
//   if (method instanceof Auth) {
//     console.log("Authenticating User...");
//     method.validateUser();
//   } else {
//     console.log("Making Payment...");
//     method.validateUser();
//   }
// }
// const auth = new Auth();
// const pay = new Payment();
// validate(auth);
// validate(pay);
//-------------------------------------------------------
// type User = {
//   name: string;
//   email: string;
//   age: number;
// };
// function isValid(user: any): user is User {
//   return (
//     user !== null &&
//     typeof user.name === "string" &&
//     typeof user.email === "string" &&
//     typeof user.age === "number"
//   );
// }
// function displayUser(user: User): User | string {
//   if (isValid(user)) {
//     return user;
//   }
//   return "Not Valid User";
// }
// console.log(
//   displayUser({
//     name: "Vansh",
//     email: "vansh@gmail.com",
//     age: 23,
//   }),
// );
// type Payment = { status: "pending"; id: string };
// type Delivery = { status: "complete"; name: string; id: string };
// type order = Payment | Delivery;
// function checkStatus(serv: order) {
//   switch (serv.status) {
//     case "pending":
//       return "Pending...";
//     case "complete":
//       return serv;
//   }
// }
// console.log(checkStatus({ status: "pending", id: "774yurhu747y4y" }));
// console.log(
//   checkStatus({ status: "complete", name: "Vansh", id: "774yurhu747y4y" }),
// );
//------------------------------
// const name: any = "Vansh";
// console.log(name.toUpperCase());
const name = "Vansh";
// console.log(name.toUpperCase()); // will give Error
if (typeof name === "string") {
    console.log(name.toUpperCase());
}
//# sourceMappingURL=typeNarrowing.js.map