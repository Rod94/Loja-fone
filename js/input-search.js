const $inputSearch = document.querySelector(".input-search");
const $searchIcon = $inputSearch.querySelector(".searchIcon");

$searchIcon.addEventListener("click", event => {
  event.preventDefault();
  console.log("ae");
  $inputSearch.classList.toggle("-active");
});
