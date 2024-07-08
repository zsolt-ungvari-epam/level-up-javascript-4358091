const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Ungvári Zsolt",
  [password]: "pswd123",
  age: 18,
};

console.log(user.username);
console.log(user.password);
