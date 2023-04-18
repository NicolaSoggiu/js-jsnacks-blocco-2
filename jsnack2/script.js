const guestName = ["Emma", "Marco", "Paolo", "Giorgia", "Enrico", "Giuseppe"];
const guestSurname = ["Conte", "Meloni", "Zaia", "Letta", "Renzi", "Bonino"];
let random = Math.floor(Math.random() * guestName.length);

let randomName = guestName[random];
let randomSurname = guestSurname[random];

console.log(randomName, randomSurname);
