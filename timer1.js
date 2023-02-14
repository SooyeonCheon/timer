const args = process.argv.slice(2);

const timer = function (times) {
  for (let time of times) {
    time = Number(time);

    if (!isNaN(time) && time >= 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
        console.log(time);
      }, time * 1000);
    }
  }
};

if (args.length > 0) {
  timer(args);
}
