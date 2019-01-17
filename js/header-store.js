const $search = document.querySelector(".search");
const $searchIcon = document.querySelector(".searchIcon");

$search.addEventListener("click", () => {
  $search.classList.toggle("-active");
  $searchIcon.classList.toggle("-active");
}); //arrow function

$searchIcon.addEventListener("click", () => {
  $searchIcon.classList.toggle("-active");
  $search.classList.toggle("-active");
});
