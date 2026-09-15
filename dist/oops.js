"use strict";
// class Student {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const std = new Student("Vansh", 23);
//---------------------------------------------
// class Student {
//   public name: string;
//   private accNo: string;
//   constructor(name: string, accNo: string) {
//     this.name = name;
//     this.accNo = accNo;
//   }
//   getInfo() {
//     return `Name: ${this.name}  Account No: ${this.accNo}`;
//   }
// }
// const std = new Student("Vansh", "83478599454584584");
// // console.log(std.accNo); // cannot access
// console.log(std.getInfo());
//---------------------------------------------
class Student {
    name = "Vansh";
}
class School extends Student {
    getName() {
        return `Name : ${this.name}`;
    }
}
const sc = new School();
// console.log(sc.name); // cannot access
console.log(sc.getName());
const std = new Student();
console.log(std.name);
//# sourceMappingURL=oops.js.map