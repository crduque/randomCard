/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const values = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
]; //11J, 12Q, 13K, 14A
const suits = ["hearts", "spades", "clubs", "diamonds"];

function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
function selectSuit() {
  let top = document.querySelector("#left-suit");
  let bot = document.querySelector("#right-suit");
  let result = randomIndex(suits);
  if (result == "hearts") {
    top.classList.add("hearts");
    bot.classList.add("hearts-rotate");
  } else if (result == "spades") {
    top.classList.add("spades");
    bot.classList.add("spades-rotate");
  } else if (result == "clubs") {
    top.classList.add("clubs");
    bot.classList.add("clubs-rotate");
  } else {
    top.classList.add("diamonds");
    bot.classList.add("diamonds-rotate");
  }
}
function selectValue() {
  let mid = document.querySelector("#value");
  let result = randomIndex(values);
  mid.innerHTML = result;
}
window.onload = function myCard() {
  selectSuit();
  selectValue();
};
// window.onload = function() {
//   let a = randomIndex(values);
//   let b = randomIndex(suits);
//   console.log(a, b);
// };
