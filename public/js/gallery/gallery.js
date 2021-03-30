const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgTex = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add(".open");
  });
});
