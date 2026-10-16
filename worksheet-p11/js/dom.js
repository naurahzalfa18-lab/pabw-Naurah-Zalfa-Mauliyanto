const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

export function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul;
    return li;
}

export function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

export function renderProyek(daftar) {
    wadah.textContent = "";

    if (daftar.length === 0) {
        kosong.hidden = false;
        return;
    }

    kosong.hidden = true;

    daftar.forEach((proyek) => {
        wadah.append(buatKartu(proyek));
    });
}
