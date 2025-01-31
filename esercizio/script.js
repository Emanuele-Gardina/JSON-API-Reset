// Funzione per salvare il nome nel localStorage
function saveName() {
  const name = document.getElementById("name").value;
  if (name.trim() !== "") {
    localStorage.setItem("userName", name);
    displaySavedName(); // Mostra il nome salvato
  }
}

// Funzione per rimuovere il nome dal localStorage
function removeName() {
  localStorage.removeItem("userName");
  document.getElementById("name").value = ""; // Pulisce il campo input
  displaySavedName(); // Rimuove il nome salvato dal messaggio
}

// Funzione per aggiornare il messaggio con il nome salvato (se presente)
function displaySavedName() {
  const savedName = localStorage.getItem("userName");
  const savedNameMessage = document.getElementById("savedNameMessage");
  const savedNameSpan = document.getElementById("savedName");

  if (savedName) {
    savedNameMessage.style.display = "block"; // Mostra il messaggio
    savedNameSpan.textContent = savedName;
  } else {
    savedNameMessage.style.display = "none"; // Nasconde il messaggio
  }
}

// Inizializza la pagina con il nome salvato, se presente
document.addEventListener("DOMContentLoaded", function () {
  displaySavedName();
});
