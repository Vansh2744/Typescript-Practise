// let user: {
//   name: string;
//   email: string;
//   age: number;
// };

// user = {
//   name: "Vansh",
//   email: "vansh@gmail.com",
//   age: 23,
// };

//------------------------

// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// const user: User = {
//   name: "Vansh",
//   email: "vansh@gmail.com",
//   age: 23,
// };

//------------------------

// type User = { name: string; email: string };

// const user: User = { name: "Vansh", email: "vansh@gmail.com" };

// type User2 = { name: string };

// let user2: User2 = user;

//-------------------------

// interface Netflix {
//   subscription: number;
//   series: string[];
// }

// const mov: Netflix = {
//   subscription: 200,
//   series: ["My Demon", "Queen of tears"],
// };

//---------------------------

type Video = {
  title: string;
  description: string;
  likes: number;
};

type History = {
  videos: Video[];
};

type User = {
  name: string;
  uploadedVideos: Video[];
  history: History;
};
