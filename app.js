//43dars

// const moves = [
//   { name: "Avatar", likes: 524 },
//   { name: "Harry Poter", likes: 521 },
//   { name: "titanic", likes: 99 },
//   { name: "Sherlook", likes: 854 },
// ];

// moves.forEach((move) => {
//   const result = `Kino nomi: ${move.name}, likes: ${move.like}`;
//   console.log(result);
// });

//44dars
// console.log(Math.random());
// console.log(Math.random() * 10);

// const randomNumber = Math.trunc(Math.random() * 10) + 1;
// console.log(randomNumber);

const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

showBtn.addEventListener("click", () => {
  modal.classList.remove("hiddin");
  overlay.classList.remove("hiddin");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hiddin");
  overlay.classList.add("hiddin");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hiddin");
  overlay.classList.add("hiddin");
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hiddin");
    overlay.classList.add("hiddin");
  }
});
