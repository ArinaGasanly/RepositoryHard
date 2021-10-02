function persistence(num) {
  let ans = 1;
  while (num !== 0) {
    ans = ans * (num % 10) ** 3;
    num = Math.floor(num / 10);

  }
  console.log(String(ans).slice(0, 2));
}

persistence(349845783);