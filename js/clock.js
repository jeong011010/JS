const clock = document.getElementById("clock");

function setClock() {
  const date = new Date;
  const H = String(date.getHours()).padStart(2, "0");
  const M = String(date.getMinutes()).padStart(2, "0");
  const S = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${H}:${M}:${S}`;
}

setInterval(setClock, 1000)