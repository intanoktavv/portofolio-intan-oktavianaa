// POPUP MENU
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const popupMenu = document.getElementById("popupMenu");

    // buka tutup menu
    menuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        popupMenu.classList.toggle("show");
    });

    // klik menu = tutup
    const menuLinks = popupMenu.querySelectorAll("a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            popupMenu.classList.remove("show");
        });
    });

    // klik luar = tutup
    document.addEventListener("click", function (e) {
        if (!popupMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            popupMenu.classList.remove("show");
        }
    });

});


// SCROOL ANIMASI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Menambahkan class active saat elemen masuk layar
            entry.target.classList.add('active');
        } else {
            // Opsional: Hapus baris ini jika ingin animasi hanya sekali saja
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15 // Animasi mulai saat 15% bagian elemen sudah terlihat
});

// Menjalankan pengintai ke semua elemen dengan class .reveal
const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));