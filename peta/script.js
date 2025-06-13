document.addEventListener("DOMContentLoaded", function () {
  const level1 = document.getElementById("level-1");
  const popup = document.getElementById("popup");

  level1.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  window.closePopup = function () {
    popup.style.display = "none";
  }
});

