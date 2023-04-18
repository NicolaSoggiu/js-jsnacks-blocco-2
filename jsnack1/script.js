// ADD EMPTY ARRAY
let listNumber = [];
console.log("listNumber before cicle", listNumber);

// ASK USER TO WRITE SIX NUMBER AND IF THE NUMBER IS ODD, ADD IT IN THE LIST
for (let i = 0; i < 6; i++) {
  let addNumber = parseInt(prompt("Add Number"));
  if (addNumber % 2 !== 0) {
    listNumber.push(addNumber);
  }
}

console.log("listNumber", listNumber);
