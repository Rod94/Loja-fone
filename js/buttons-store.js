const $second = window.document.querySelector(".-second");
const $actLast = window.document.querySelector("a.-last");

$second.addEventListener("click", handleClick);

function handleClick() {
  $actLast.innerHTML = "Carrinho lotado";
}
