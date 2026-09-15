import axios, { type AxiosResponse } from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// const getUser = async () => {
//   try {
//     const res: AxiosResponse<User> = await axios.get(
//       "https://jsonplaceholder.typicode.com/users/1",
//     );
//     console.log(res.data);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(error.message);
//     }
//     if (axios.isAxiosError(error)) {
//       console.log(error.message);
//       if (error.response) {
//         console.log(error.response.status);
//       }
//     }
//   }
// };

// getUser();

//------------------------------

const getUser = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const result: User = await res.json();
    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

getUser();
