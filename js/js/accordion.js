const accordion = document.querySelectorAll(".js-accordion");

// Ao clicar no accordion, ambos elementos que tiverem a classe active ficaram ativos

accordion.forEach((acc) => {
  acc.addEventListener("click", () => {
    let pai = acc.parentElement;

    pai.classList.toggle("active");
  });
});

// Ao clicar no accordion, o elemento que tiver a classe active será escondido

// accordion.forEach((acc) => {
//   acc.addEventListener("click", () => {
//     accordion.forEach((item) => {
//       item.parentElement.classList.remove("active");
//     });

//     acc.parentElement.classList.add("active");
//   });
// });
