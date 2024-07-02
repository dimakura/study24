const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

console.log("Before promise");
delay(100).then(() => console.log("After half a second"));
console.log("After promise");
