const user = { name: "John", address: { street: "Main Street" } };
const otherUser = { name: "Jane" };

console.log(user.address?.street);
console.log(otherUser.address?.street);
