// Classes
// .classList.add
// .classList.remove
// .classList.toggle
// .classList.contains
// .classList.replace

const titulo = document.querySelector("div");

titulo.addEventListener("click", () => {
  titulo.classList.toggle("ativo");
});

// Atributos
// .getAttribute('src') valor do src
// .setAttribute('src', './teste.teste') muda o src 
// .hasAttribute('id') true ou false
// .removeAttribute('alt') remove o alt

const img = document.querySelector("img");

console.log(img.getAttribute("src"));

img.setAttribute("src", "./js/arraysLoops.js");
console.log(img.getAttribute("src"));
