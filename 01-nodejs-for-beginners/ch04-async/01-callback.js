const doSomething = (cb) => {
  console.log("Doing something...");
  cb();
};

doSomething(() => {
  console.log("Done!");
});
