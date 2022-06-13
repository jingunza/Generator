/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  renderOnLoad();
};

const renderOnLoad = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = "";

  excuse += who[Math.floor(Math.random() * who.length)] + " ";
  excuse += action[Math.floor(Math.random() * action.length)] + " ";
  excuse += what[Math.floor(Math.random() * what.length)] + " ";
  excuse += when[Math.floor(Math.random() * when.length)];

  document.querySelector("#excusa").innerHTML = excuse;
};
document.querySelector("button").addEventListener("click", renderOnLoad);
