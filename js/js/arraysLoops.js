// Arrays

var livros = ["Genesis", "Exodo", "Leviticus", "Numeros", "Deuteronomio"];

console.log(livros[2]);

livros.pop(); // remove o ultimo elemento do array
livros.push("Romanos"); // adiciona um elemento no final do array
livros.length; // retorna o tamanho do array

// For loop

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

for (var i = 0; i < livros.length; i++) {
  console.log(livros[i]);

  if (livros[i] === "Genesis") {
    break;
  }
}

// For Each

// item
// index
// array

livros.forEach(function (i) {
  console.log(i);
});
