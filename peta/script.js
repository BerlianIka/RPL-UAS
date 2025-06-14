document.addEventListener("DOMContentLoaded", function () {
  const level1 = document.getElementById("level-1");
  const popup1 = document.getElementById("popup-level1");
  const nextQuestBtn = document.getElementById("after-popuplvl1");
  const popup12 = document.getElementById("popup-level12");
  const submitBtn12 = document.getElementById("submit12-btn");
  const questAlert = document.getElementById("quest-alert");
  const questAlert2 = document.getElementById("quest-alert2");
  const level2 = document.getElementById("level-2");
  const popup2 = document.getElementById("popup-level2");

  // Buka popup level 1
  level1?.addEventListener("click", () => {
    popup1.style.display = "flex";
  });

  // Tombol +60 XP: Tutup popup 1, buka popup 12
  nextQuestBtn?.addEventListener("click", () => {
    popup1.style.display = "none";
    popup12.style.display = "flex";
  });

  // Fungsi untuk menutup popup manapun
  window.closePopup = function (popupId) {
    const target = document.getElementById(popupId);
    if (target) target.style.display = "none";
  };

  // Submit tombol form: tutup popup, tampilkan alert
  submitBtn12?.addEventListener("click", (e) => {
    e.preventDefault();
    popup12.style.display = "none";
    showQuestAlert();
    showQuestAlert2();
  });

  // Buka popup level 2
  level2?.addEventListener("click", () => {
    popup2.style.display = "flex";
  });

  // Fungsi menampilkan notifikasi
  function showQuestAlert() {
    questAlert.classList.add("show");

    setTimeout(() => {
      questAlert.classList.remove("show");
      questAlert.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert.classList.remove("hide");
      }, 500);
    }, 3000);
  }

  // Fungsi menampilkan notifikasi
  function showQuestAlert2() {
    questAlert2.classList.add("show");

    setTimeout(() => {
      questAlert2.classList.remove("show");
      questAlert2.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert2.classList.remove("hide");
      }, 500);
    }, 3000);
  }
});