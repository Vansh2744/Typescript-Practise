type User = {
  name: string;
  email: string;
  age: number;
};

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

//------------Correct Ways--------------

// type Role = { user: "STUDENT" | "ADMIN" };

// class LMS implements Role {
//   user: "STUDENT" | "ADMIN" = "STUDENT";
// }

//------------------

// interface Role {
//   user: "STUDENT" | "ADMIN";
// }

// class LMS implements Role {
//   user: "STUDENT" | "ADMIN" = "STUDENT";
// }
