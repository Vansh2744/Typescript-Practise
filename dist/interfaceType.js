"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=interfaceType.js.map