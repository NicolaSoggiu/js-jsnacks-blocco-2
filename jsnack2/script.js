// ADD LIST
const guestName = ["Emma", "Marco", "Paolo", "Giorgia", "Enrico", "Giuseppe"];
const guestSurname = ["Conte", "Meloni", "Zaia", "Letta", "Renzi", "Bonino"];
// let fakeList = [];

let random = Math.floor(Math.random() * guestName.length);
let randomName = guestName[random];
let randomSurname = guestSurname[random];

// for (i = 0; i <= 3; i++) {
//   fakeList.push(randomName, randomSurname);
//   console.log(fakeList);
// }

console.log(randomName, randomSurname);
