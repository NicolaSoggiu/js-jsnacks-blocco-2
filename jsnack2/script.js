// ADD LIST
const guestName = ["Emma", "Marco", "Paolo", "Giorgia", "Enrico", "Giuseppe"];
const guestSurname = ["Conte", "Meloni", "Zaia", "Letta", "Renzi", "Bonino"];

// ADD CICLE FOR THE NEW ARRAY
let fakeList = [];
for (let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * guestName.length);
  let randomName = guestName[random];
  let randomSurname = guestSurname[random];
  fakeList.push([randomName, randomSurname]);
}

console.log(fakeList);
