const phone1 = 9893883748;
const phone2 = "9893883748";
let access;
function dashboard(role) {
    if (role === "ADMIN") {
        access = "Full Access";
    }
    return `You Can Access all ${role} Features`;
}
console.log(dashboard("ADMIN"));
console.log(access);
export {};
//# sourceMappingURL=union.js.map