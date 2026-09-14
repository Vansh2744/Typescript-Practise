"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayUser(name, phone) {
    if (typeof phone === "string") {
        console.log(`Calling String type phone : ${name}`);
    }
    else {
        console.log(`Calling Number type phone : ${name}`);
    }
}
let access;
function dashboard(role) {
    if (role === "ADMIN") {
        access = "Full Access";
    }
    return `You Can Access all ${role} Features`;
}
class Auth {
    validateUser() {
        console.log("Validating Auth User...");
    }
}
class Payment {
    validateUser() {
        console.log("Validating Payment User...");
    }
}
function validate(method) {
    if (method instanceof Auth) {
        console.log("Authenticating User...");
        method.validateUser();
    }
    else {
        console.log("Making Payment...");
        method.validateUser();
    }
}
const auth = new Auth();
const pay = new Payment();
validate(auth);
validate(pay);
//# sourceMappingURL=typeNarrowing.js.map