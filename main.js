"use strict";

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus"),
  tagline = document.getElementById("tagline"),
  teamVerte = ["Teresa", "Romane", "Hendrick", "Reda", "Khalid"],
  randomHerosOfWeek = Math.floor(Math.random() * teamVerte.length);

function taGline() {
  tagline.textContent = teamVerte[randomHerosOfWeek];
}

function showTime() {
  let today = new Date(),
    heure = today.getHours(),
    minutes = today.getMinutes(),
    secondes = today.getSeconds();

  time.innerHTML = `${addZero(heure)}<span>:</span>${addZero(
    minutes
  )}<span>:</span>${addZero(secondes)} `;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  //
  if (hour < 10) {
    document.body.style.backgroundImage =
      "url('http://1.bp.blogspot.com/-GTwS9hwFjPI/UqQZwADVTJI/AAAAAAAAhXA/9hsX90L2tQY/s1600/P1090192a.jpg')";
    greeting.textContent =
      "Debout les petits loups, il va faire chaud aujourd'hui, ";
    document.body.style.color = "black";
  }
  //
  else if (hour < 16) {
    document.body.style.backgroundImage =
      "url('https://media.giphy.com/media/qUncuw2TsXilq/giphy.gif')";

    greeting.textContent = "Ce serait trop Cool, ";
    document.body.style.color = "black";
  }
  //
  /* else if (hour < 10) {
    document.body.style.backgroundImage =
      "url('https://www.safraes.com.br/arquivos/upload/images/2019/013/coffee-1769587-1920.jpg')";
    greeting.textContent = "Bon Café, ";
    document.body.style.color = "white";
  }
  */
  //
  else if (hour < 0) {
    document.body.style.backgroundImage =
      "url('http://mumuland.m.u.pic.centerblog.net/o/6414162b.jpg')";
    greeting.textContent = "Bon Après-Midi, ";
    document.body.style.color = "white";
  } else {
    //
    document.body.style.backgroundImage =
      "url('https://423841.smushcdn.com/884745/wp-content/uploads/2017/06/nuit-du-destin.jpg?lossy=1&strip=1&webp=1')";
    greeting.textContent = "Bonsoir, ";
    document.body.style.color = "white";
  }
}
/*if (tagline) {
  tagline.addEventListener(
    "click",
    (tagline.textContent = teamVerte[randomHerosOfWeek])
  );
}*/
//
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
//
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
//
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
//
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
//
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
//
showTime();
setBgGreet();
getName();
getFocus();
taGline();

