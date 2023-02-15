const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter b or number(1-9)\n", (answer) => {
  if (answer == "b") {
    process.stdout.write("\x07");
  } else if (answer >= 1 && answer <= 9) {
    process.stdout.write(`setting timer for ${answer} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, answer * 1000);
  }

  rl.close();
});

rl.on('SIGINT', function() {
  console.log("Thanks for using me, ciao!");
  process.exit();
});
