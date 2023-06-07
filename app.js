/** @format */

// ---- 1 ---- //
let windowOpen = window.open("", "", "width=300, height=300");

// додаю 2 секунди
setTimeout(function () {
  windowOpen.resizeTo(500, 500);
}, 2000);
// додаю 2 секунди
setTimeout(function () {
  windowOpen.moveBy(200, 200);
}, 4000);
// додаю 2 секунди
setTimeout(function () {
  windowOpen.close();
}, 6000);

// ---- 2 ---- //
const btn = document.querySelector("button");

function changeCSS() {
  const text = document.getElementById("text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
}

btn.addEventListener("click", changeCSS);

// ---- 3 ---- //
const body = document.querySelector("body");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const link = document.getElementById("link");

button1.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});
button2.addEventListener("dblclick", function () {
  body.style.backgroundColor = "pink";
});
button3.addEventListener("mousedown", function () {
  body.style.backgroundColor = "brown";
});
button3.addEventListener("mouseup", function () {
  body.style.backgroundColor = "white";
});

link.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "white";
});

// ---- 4 ---- //
const select = document.getElementById("nameSelect");
const btnNew = document.getElementById("remove");

btnNew.addEventListener("click", () => {
  const opt = select.options[select.selectedIndex];
  if (opt) opt.remove();
});

// ---- 5 ---- //
const getBtn = document.getElementById("button");
const outBlock = document.getElementById("out");

getBtn.addEventListener("click", () => {
  outBlock.textContent = "I was pressed!";
});
getBtn.addEventListener("mouseover", () => {
  outBlock.textContent = "Mouse on me!";
});
getBtn.addEventListener("mouseout", () => {
  outBlock.textContent = "Mouse is not on me!";
});
