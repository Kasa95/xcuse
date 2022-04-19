/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var who = [
    "my dog ",
    "my mum ",
    "my brother ",
    "a policewoman ",
    "the president of Uganda ",
    "Michael Phelps "
  ];
  var verb = ["ate ", "devoured ", "destroyed ", "threw away "];
  var what = [
    "my homework ",
    "my assignments ",
    "the code I wrote ",
    "my book "
  ];
  var when = [
    "just before I got here",
    "yesterday evening",
    "a week ago",
    "5 minutes ago"
  ];
  var sorry = [
    "I'll do better next time!",
    "Sorry!",
    "That's life!",
    "What a pity!"
  ];

  var rdm1 = Math.floor(Math.random() * who.length);
  var rdm2 = Math.floor(Math.random() * verb.length);
  var rdm3 = Math.floor(Math.random() * what.length);
  var rdm4 = Math.floor(Math.random() * when.length);
  var rdm5 = Math.floor(Math.random() * sorry.length);

  document.querySelector("#excuse").innerHTML =
    who[rdm1] + verb[rdm2] + what[rdm3] + when[rdm4] + ". " + sorry[rdm5];
};
