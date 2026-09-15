// enum Size {
//   SMALL,
//   MEDIUM,
//   LARGE,
// }
// const size1 = Size.SMALL; // 0
// const size2 = Size.MEDIUM; // 1
// const size3 = Size.LARGE; // 2
// enum Size {
//   SMALL = 100,
//   MEDIUM,
//   LARGE,
// }
// const size1 = Size.SMALL; // 100
// const size2 = Size.MEDIUM; // 101
// const size3 = Size.LARGE; // 102
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["COMPLETED"] = "COMPLETED";
})(Status || (Status = {}));
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
})(Role || (Role = {}));
export {};
// Role.ADMIN = "MAIN" // give error
//# sourceMappingURL=enum.js.map