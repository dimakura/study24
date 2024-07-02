console.log("Before timeout");

setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

console.log("After timeout");
