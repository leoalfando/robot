const stdin = process.openStdin();

stdin.addListener("data", function(input) {
  console.log(input);
});

