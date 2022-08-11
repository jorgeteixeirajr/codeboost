const navTabs = document.querySelectorAll(".js-nav-tabs li a");
const tabPane = document.querySelectorAll(".js-tab-pane");

navTabs.forEach((nav, index) => {
  nav.addEventListener("click", (event) => {
    // previne o estado padrão do link
    event.preventDefault();

    // percorre o array e remove o que tiver classe active
    navTabs.forEach((itemNav) => {
      itemNav.classList.remove("active");
    });

    // percorre o array e remove o que tiver classe active
    tabPane.forEach((tab) => {
      tab.classList.remove("active");
    });

    // percorre o array e adicionar a classe active
    nav.classList.add("active");

    // percorre o array na posição do index e adiciona a classe active
    tabPane[index].classList.add("active");
  });
});
