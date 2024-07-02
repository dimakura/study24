function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log("1 + 2 + 3 =", sum(1, 2, 3));
console.log("1 + 2 + 3 + 4 =", sum(1, 2, 3, 4));
