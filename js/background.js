const imageLength = 14;

const rand = Math.floor(Math.random() * imageLength)

//const bgImage = document.createElement("img");
const body = document.querySelector("body");

const bgImage = `url(img/${rand}.jpg)`;

//document.body.appendChild(bgImage);

body.style.backgroundImage = bgImage;