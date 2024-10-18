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
}
