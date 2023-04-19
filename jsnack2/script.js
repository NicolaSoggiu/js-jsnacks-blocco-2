// ADD LIST
const guestName = ["Emma", "Marco", "Paolo", "Giorgia", "Enrico", "Giuseppe"];
const guestSurname = ["Conte", "Meloni", "Zaia", "Letta", "Renzi", "Bonino"];
const fakeList = [];

// ADD CICLE FOR THE NEW ARRAY
for (let i = 0; i < 6; i++) {
  let randomIndexName = Math.floor(Math.random() * guestName.length);
  let randomName = guestName[randomIndexName];
  let randomIndexSurname = Math.floor(Math.random() * guestSurname.length);
  let randomSurname = guestSurname[randomIndexSurname];
  let randomPerson = randomName + " " + randomSurname;
  fakeList.push(randomPerson);
}

console.log(fakeList);
