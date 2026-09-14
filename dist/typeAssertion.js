"use strict";
// const name: any = "Vansh";
Object.defineProperty(exports, "__esModule", { value: true });
// const len = (name as string).length;
// type User = {
//   name: string;
//   email: string;
//   age: number;
// };
// const user = '{"name":"Vansh","email":"vansh@gmail.com","age":23}';
// console.log((JSON.parse(user) as User).email);
//-----------------------------------------
function getUsers() {
    throw new Error("Unable to fetch users");
}
try {
    getUsers();
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log("Error", error);
    }
}
//# sourceMappingURL=typeAssertion.js.map