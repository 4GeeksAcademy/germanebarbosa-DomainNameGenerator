/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Code

let pronoun = ["the", "our", "is", "just"];
let adj = ["great", "big", "crazy", "unvelibable", "unique"];
let noun = ["jogger", "racoon", "dog", "website", "love", "kittycats"];
let extension = [".com", ".net", ".co", ".us", ".es"];

function getRandomDomain() {
  let domain = `${getRandomElementArray(pronoun)}${getRandomElementArray(
    adj
  )}${getRandomElementArray(noun)}${getRandomElementArray(extension)}`;
  return domain;
}

function getRandomElementArray(list) {
  return list[Math.floor(Math.random() * list.length)];
}

let i = 0;
do {
  i++;
  console.log(getRandomDomain());
} while (i < 10);

// for (let i = 0; i <= 10; i++) {
//   console.log(getRandomDomain());
// }
