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

enum Status {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
}

const enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

// Role.ADMIN = "MAIN" // give error