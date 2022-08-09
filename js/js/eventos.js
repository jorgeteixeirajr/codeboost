// Eventos

const button = document.querySelector("button");

// é uma boa prática separar função de callback dos eventos

function eventoCallback() {
  console.log("clicou aqui ó");
}

button.addEventListener("click", eventoCallback);
