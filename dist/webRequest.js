import axios, {} from "axios";
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
        const result = await res.json();
        console.log(result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
getUser();
//# sourceMappingURL=webRequest.js.map