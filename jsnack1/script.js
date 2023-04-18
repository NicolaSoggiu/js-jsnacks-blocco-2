let listNumber = [];
console.log("listNumber before cicle", listNumber);

for (let i = 0; i < 6; i++) {
  let addNumber = parseInt(prompt("Add Number"));
  if (addNumber % 2 !== 0) {
    listNumber.push(addNumber);
  }
}

console.log("listNumber", listNumber);
