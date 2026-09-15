import axios, { type AxiosResponse } from "axios";

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }

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

const getUser = async () => {
  try {
    const res: AxiosResponse<User> = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    console.log(res.data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    if (axios.isAxiosError(error)) {
      console.log(error.message);
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }
};

getUser();
