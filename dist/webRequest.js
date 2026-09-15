import axios, {} from "axios";
const getUser = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        console.log(res.data);
    }
    catch (error) {
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
//# sourceMappingURL=webRequest.js.map