const name = "Jane";
const age = 25;
const data = { item: "Lorem Ipsum", status: "OK" };

const user = { name, age, data };
const { item, status } = data;

console.log(JSON.stringify(user, null, 2));
console.log(item, status);
