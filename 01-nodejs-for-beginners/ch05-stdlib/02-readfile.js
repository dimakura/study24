import { readFile } from "node:fs/promises";

readFile("data.txt")
  .then((content) => console.log(content.toString()))
  .catch((err) => console.error(err));
