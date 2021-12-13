const giocatoreP = document.querySelector(".player");
const giocatoreC = document.querySelector(".computer");
const computer = Math.floor(Math.random() * 6 + 1);
const player = Math.floor(Math.random() * 6 + 1);

if (computer > player) {
  giocatoreC.innerHTML = `
  <h1 class="green">Computer</h1>
  <p class="green">Il computer ha Vinto</p>
  <p class="green">${computer}</p>
  `;
  giocatoreP.innerHTML = `
  <h1 class="red">Player</h1>
  <p class="red">Hai Perso :(</p>
  <p class="red">${player}</p>
  `;
} else if (computer < player) {
  giocatoreC.innerHTML = `
  <h1 class="red">Computer</h1>
  <p class="red">Il computer ha Perso</p>
  <p class="red">${computer}</p>
  `;
  giocatoreP.innerHTML = `
  <h1 class="green">Player</h1>
  <p class="green">Hai Vinto :)</p>
  <p class="green">${player}</p>
  `;
} else {
  giocatoreC.innerHTML = `
  <h1 class="green">Computer</h1>
  <p class="green">Pareggio</p>
  <p class="green">${computer}</p>
  `;
  giocatoreP.innerHTML = `
  <h1 class="green">Player</h1>
  <p class="green">Pareggio</p>
  <p class="green">${player}</p>
  `;
}
