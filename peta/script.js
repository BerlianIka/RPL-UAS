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
  const nextQuestBtn2 = document.getElementById("after-popuplvl2");
  const popup21 = document.getElementById("popup21-pembimbing");
  const submitBtn21 = document.getElementById("submit21-pembimbing");
  const questAlert3 = document.getElementById("quest-alert3");
  const questAlert4 = document.getElementById("quest-alert4");
  const level3 = document.getElementById("level-3");
  const popup3 = document.getElementById("popup-level3");
  const nextQuestBtn3 = document.getElementById("after-popuplvl3");
  const popup31 = document.getElementById("popup21-judul");

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

  // Tombol +100 XP: Tutup popup 2, buka popup 21
  nextQuestBtn2?.addEventListener("click", () => {
    popup2.style.display = "none";
    popup21.style.display = "flex";
  });

  // Submit tombol form: tutup popup, tampilkan alert
  submitBtn21?.addEventListener("click", (e) => {
    e.preventDefault();
    popup21.style.display = "none";
    showQuestAlert3();
    showQuestAlert4();
  });

  // Buka popup level 3
  level3?.addEventListener("click", () => {
    popup3.style.display = "flex";
  });

  // Tombol +120 XP: Tutup popup 3, buka popup 31
  nextQuestBtn3?.addEventListener("click", () => {
    popup3.style.display = "none";
    popup31.style.display = "flex";
  });

  // Fungsi menampilkan notifikasi lvl 1
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

  // Fungsi menampilkan notifikasi lvl 2
  function showQuestAlert3() {
    questAlert3.classList.add("show");

    setTimeout(() => {
      questAlert3.classList.remove("show");
      questAlert3.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert3.classList.remove("hide");
      }, 500);
    }, 3000);
  }

  function showQuestAlert4() {
    questAlert4.classList.add("show");

    setTimeout(() => {
      questAlert4.classList.remove("show");
      questAlert4.classList.add("hide");

      // Bersihkan class hide setelah selesai animasi
      setTimeout(() => {
        questAlert4.classList.remove("hide");
      }, 500);
    }, 3000);
  }
});