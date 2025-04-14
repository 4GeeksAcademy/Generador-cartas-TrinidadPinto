
window.onload = function () {
  function generarCarta() {
    //write your code here
    const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const valor = valores[Math.floor(Math.random() * valores.length)];

    const pintaCarta = Math.floor(Math.random() * 4) + 1;
    let pintaSimbolo = "";
    let clasePalo = "";

    if (pintaCarta === 1) {
      pintaSimbolo = "♠";
      clasePalo = "spade";
    } else if (pintaCarta === 2) {
      pintaSimbolo = "♥";
      clasePalo = "heart";
    } else if (pintaCarta === 3) {
      pintaSimbolo = "♦";
      clasePalo = "diamond";
    } else {
      pintaSimbolo = "♣";
      clasePalo = "club";
    }

    const topLeft = document.getElementById("top-left");
    const bottomRight = document.getElementById("bottom-right");
    const center = document.getElementById("card-value");
    const carta = document.getElementById("carta");

    topLeft.textContent = pintaSimbolo;
    bottomRight.textContent = pintaSimbolo;
    center.textContent = valor;

    carta.className = `card ${clasePalo}`;
  }
  generarCarta();
  const boton = document.getElementById("new-card-btn");
  boton.addEventListener("click", generarCarta);
};
