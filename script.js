// === Fitur 1: Toggle Dark/Light Mode ===
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    console.log("Tombol warna diklik!");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Ubah ke Light Mode";
    } else {
        themeBtn.textContent = "Ubah ke Dark Mode";
    }
});

// === Fitur 2: Sapa Pengunjung ===
const greetBtn = document.getElementById("greetBtn");
const greetingText = document.getElementById("greeting");

greetBtn.addEventListener("click", () => {
    console.log("Tombol sapa diklik!");

    const name = prompt("Siapa nama kamu?");
    if (name && name.trim() !== "") {
        greetingText.innerText = `Halo, ${name}! Senang bertemu denganmu 😊`;
    } else {
        greetingText.innerText = "Halo, pengunjung misterius!";
    }
});

/* 
===============================
        REFLEKSI SINGKAT
===============================

Bagian tersulit adalah memahami cara kerja DOM dan event listener,
karena sebelumnya halaman hanya statis dan tidak berinteraksi dengan pengguna.

Namun ketika tombol berhasil bekerja — dark mode berubah,
alert muncul, dan teks sapaan tampil otomatis — rasanya seperti
"MOMEN WOW". Ternyata kode sekecil itu bisa membuat halaman hidup!
*/