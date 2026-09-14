const phone1: string | number = 9893883748;
const phone2: string | number = "9893883748";

let access: string | undefined;

function dashboard(role: "USER" | "ADMIN" | "MEMBER") {
  if (role === "ADMIN") {
    access = "Full Access";
  }
  return `You Can Access all ${role} Features`;
}

console.log(dashboard("ADMIN"));
console.log(access);
