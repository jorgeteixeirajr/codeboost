const allDropDowns = document.querySelectorAll(".js-dropdown");

allDropDowns.forEach((item, index) => {
  item.addEventListener("click", function () {
    console.log("Estou clicando no item " + index);
  });
});
