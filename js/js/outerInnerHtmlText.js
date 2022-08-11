const titulo = document.querySelector(".titulo");

console.log(titulo.outerHTML); // todo html do elemento
console.log(titulo.innerText); // texto do elemento, sem tag
console.log(titulo.innerHTML); // html interno

titulo.innerText = "<h1>Novo titulo</h1>"; // A tag vai como texto
titulo.innerHTML = "<h1>Novo titulo</h1>"; // a tag é renderizada
