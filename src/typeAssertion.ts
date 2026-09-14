const name: any = "Vansh";

const len = (name as string).length;

type User = {
  name: string;
  email: string;
  age: number;
};

const user = '{"name":"Vansh","email":"vansh@gmail.com","age":23}';

console.log((JSON.parse(user) as User).email);
