const h1 = document.getElementById("heading");
const email = ["hamza@gmail.com", "pinco@gmail.com", "palo@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com"];

const richiesta = prompt("Scrivi qui la tua email");

for (let i = 0; i < email.length; i++) {
  if (richiesta == email[i]) {
    h1.innerHTML = `La tua email: <h1>${email[i]}</h1> è nella lista di chi può accedere :)`;
  } else {
    console.log("email non presente nella lista");
  }
}
