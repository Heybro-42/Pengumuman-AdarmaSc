function selectDivision() {
    // Sembunyikan semua daftar kandidat
    var lists = document.querySelectorAll('.candidate-list');
    lists.forEach(list => {
        list.classList.remove('active');
    });

    // Tampilkan daftar kandidat sesuai divisi yang dipilih
    var selectedDivision = document.getElementById("divisionSelect").value;
    if (selectedDivision === "pengabdian") {
        document.getElementById("pengabdianList").classList.add('active');
    } else if (selectedDivision === "perhubungan") {
        document.getElementById("perhubunganList").classList.add('active');
    } else if (selectedDivision === "media") {
        document.getElementById("mediaList").classList.add('active');
    }

    // Jalankan konfeti hanya ketika divisi dipilih
    if (selectedDivision) {
        fireConfetti();
    }
}

// Fungsi untuk menjalankan animasi konfeti
function fireConfetti() {
    var end = Date.now() + 2 * 1000; // durasi konfeti selama 2 detik

    // Fungsi konfeti berulang selama durasi
    (function frame() {
        // Atur beberapa gaya konfeti
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
