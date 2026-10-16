const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul;
    return li;
}

export function tandaiTombolAktif(kategoriAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle(
            "aktif",
            tombol.dataset.kategori === kategoriAktif
        );
    });
}

export function saring(state) {
    return state.daftarProyek.filter(
        (proyek) =>
            state.kategoriAktif === "semua" ||
            proyek.kategori === state.kategoriAktif
    );
}

export function render(state) {
    wadah.textContent = "";

    const tampil = saring(state);

    if (tampil.length === 0) {
        kosong.hidden = false;
        tandaiTombolAktif(state.kategoriAktif);
        return;
    }

    kosong.hidden = true;

    tampil.forEach((proyek) => {
        wadah.append(buatKartu(proyek));
    });

    tandaiTombolAktif(state.kategoriAktif);
}
