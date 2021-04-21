/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".io", ".org", ".net", ".com"];
var dominiosP = document.getElementById("dominiosP");
var dominio = [];
for (let index = 0; index < pronoun.length; index++) {
  const priPart = pronoun[index];
  for (let index = 0; index < adj.length; index++) {
    const segPart = adj[index];
    for (let index = 0; index < noun.length; index++) {
      const terPart = noun[index];
      for (let index = 0; index < ext.length; index++) {
        const cuaPart = ext[index];
        // console.log(priPart + segPart + terPart + cuaPart);
        dominio.push(priPart + segPart + terPart + cuaPart);
        dominiosP.innerHTML += priPart + segPart + terPart + cuaPart + "<br>";
      }
    }
  }
}
console.log(dominio);
