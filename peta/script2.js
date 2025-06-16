document.addEventListener("DOMContentLoaded", function () {
  const level5 = document.getElementById("level-5");
  const popup5 = document.getElementById("popup-level5");
  const nextQuestBtn5 = document.getElementById("after-popuplvl5");
  const popup51 = document.getElementById("popup51-jadwal");
  const submitBtn51 = document.getElementById("submit51-jadwal");
  const questAlert9 = document.getElementById("quest-alert9");
  const questAlert10 = document.getElementById("quest-alert10");
  const level69 = document.getElementById("level-69");
  const popup69 = document.getElementById("popup-level69");
  const nextQuestBtn69 = document.getElementById("after-popuplvl69");
  const popup691 = document.getElementById("popup691-container");
  const progress691Btn = document.getElementById("progress691-box");
  const questAlert691 = document.getElementById("quest-alert691");
  const questAlert692 = document.getElementById("quest-alert692");

  // Buka popup level 5
  level5?.addEventListener("click", () => {
    popup5.style.display = "flex";
  });

  // Tombol +200 XP: Tutup popup 2, buka popup 51
  nextQuestBtn5?.addEventListener("click", () => {
    popup5.style.display = "none";
    popup51.style.display = "flex";
  });

  // Submit tombol form: tutup popup, tampilkan alert
  submitBtn51?.addEventListener("click", (e) => {
    e.preventDefault();
    popup51.style.display = "none";
    showQuestAlert9();
    showQuestAlert10();
  });

  // Buka popup level 69
  level69?.addEventListener("click", () => {
    popup69.style.display = "flex";
  });

  // Tombol +60 XP: Tutup popup 4, buka popup 41
  nextQuestBtn69?.addEventListener("click", () => {
    popup69.style.display = "none";
    popup691.style.display = "flex";
  });

  // Submit tombol form: tutup popup, tampilkan alert
  progress691Btn?.addEventListener("click", (e) => {
    e.preventDefault();
    popup691.style.display = "none";
    showQuestAlert691();
    showQuestAlert692();
  });

  // Fungsi menampilkan notifikasi lvl 5
  function showQuestAlert9() {
    questAlert9.classList.add("show");

    setTimeout(() => {
      questAlert9.classList.remove("show");
      questAlert9.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert9.classList.remove("hide");
      }, 500);
    }, 3000);
  }

  function showQuestAlert10() {
    questAlert10.classList.add("show");

    setTimeout(() => {
      questAlert10.classList.remove("show");
      questAlert10.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert10.classList.remove("hide");
      }, 500);
    }, 3000);
  }

  // Fungsi menampilkan notifikasi lvl 69
  function showQuestAlert691() {
    questAlert691.classList.add("show");

    setTimeout(() => {
      questAlert691.classList.remove("show");
      questAlert691.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert691.classList.remove("hide");
      }, 500);
    }, 3000);
  }

  function showQuestAlert692() {
    questAlert692.classList.add("show");

    setTimeout(() => {
      questAlert692.classList.remove("show");
      questAlert692.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert692.classList.remove("hide");
      }, 500);
    }, 3000);
  }
});

// Fungsi untuk menutup popup manapun
window.closePopup = function (popupId) {
  const target = document.getElementById(popupId);
  if (target) target.style.display = "none";
};
