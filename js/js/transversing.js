const titulo = document.querySelector(".container");

console.log(titulo.parentElement); //Engloba a tag pai
console.log(titulo.previousElementSibling); //Engloba a tag anterior
console.log(titulo.nextElementSibling); //Engloba a próxima tag

const novoTitulo = document.createElement("h2"); //Cria uma tag

novoTitulo.innerText = "Titulo secundário";

novoTitulo.classList.add("titulo-secundario", "titulo");

titulo.appendChild(novoTitulo); //Cria o elemento dentro da tag selecionada

titulo.removeChild(novoTitulo); //Remove o elemento dentro da tag selecionada
