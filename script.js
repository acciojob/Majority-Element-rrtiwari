const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let n = parseInt(input[0]);
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
  }

  function majorityElement(arr) {
    let n = arr.length;
    let count = 1;
    let res = 0;

    for (let i = 1; i < n; i++) {
      if (arr[i] === arr[res]) {
        count++;
      } else {
        count--;
      }
      if (count === 0) {
        res = i;
        count = 1;
      }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] === arr[res]) {
        ans++;
      }
    }

    if (ans > Math.floor(n / 2)) {
      return arr[res];
    } else {
      return -1;
    }
  }

  console.log(majorityElement(arr));
});



