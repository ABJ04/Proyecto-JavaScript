let PrecioInicial = document.querySelector(".PrecioInicial");
let cantidad = document.querySelector(".cantidad");
let ValorTotal = document.querySelector(".ValorTotal");
let bottMas = document.querySelector(".bottMas");
let bottMenos = document.querySelector(".bottMenos");

bottMas.addEventListener("click", () => {
  cantidad.innerHTML++;
  ValorTotal.innerHTML = (
    cantidad.innerHTML * PrecioInicial.innerHTML
  ).toLocaleString();
});

bottMenos.addEventListener("click", () => {
  cantidad.innerHTML--;
  ValorTotal.innerHTML = (
    cantidad.innerHTML * PrecioInicial.innerHTML
  ).toLocaleString();
});
