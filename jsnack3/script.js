const numberList = [5, 10, 50, 120, 20, 90, 30, 20, 90, 20];

let sum = 0;
for (let i = 0; i < numberList.length; i++) {
  if (i % 2 !== 0) {
    sum += numberList[i];
  }
}
console.log(sum);
