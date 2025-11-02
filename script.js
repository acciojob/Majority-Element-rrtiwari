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

let n = parseInt(prompt("Enter the value of n"));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(prompt(`Enter element ${i + 1}:`)));
}

majorityElement(arr);


