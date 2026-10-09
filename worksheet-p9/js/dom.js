import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
    const li = document.createElement("li");
    li.className = "kartu";
    li.textContent = proyek.judul;
    return li;
}

function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

function render(daftar) {
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

render(daftarProyek);

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol) return;

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;

    const terpilih = daftarProyek.filter(
        (proyek) =>
            kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
});

const form = document.querySelector("form");

const materi = document.querySelector("#materi");
const catatan = document.querySelector("#catatan-evaluasi");
const rencana = document.querySelector("#rencana-perbaikan");

const errorMateri = document.querySelector("#error-materi");
const errorCatatan = document.querySelector("#error-catatan");
const errorRencana = document.querySelector("#error-rencana");

const tombolSimpan = form.querySelector("button[type='submit']");

function validasiKolom(kolom, pesanError) {
    const sah = kolom.value.trim() !== "";

    if (sah) {
        kolom.setAttribute("aria-invalid", "false");
        pesanError.textContent = "";
    } else {
        kolom.setAttribute("aria-invalid", "true");
        pesanError.textContent =
            "Kolom ini wajib diisi. Silakan masukkan isinya.";
    }

    return sah;
}

function validasiForm() {
    const materiValid = validasiKolom(materi, errorMateri);
    const catatanValid = validasiKolom(catatan, errorCatatan);
    const rencanaValid = validasiKolom(rencana, errorRencana);

    const sah = materiValid && catatanValid && rencanaValid;

    return sah;
}

[materi, catatan, rencana].forEach((kolom) => {
    kolom.addEventListener("input", () => {
        const petaError = {
            materi: errorMateri,
            "catatan-evaluasi": errorCatatan,
            "rencana-perbaikan": errorRencana
        };

        validasiKolom(kolom, petaError[kolom.id]);

    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const sah = validasiForm();

    if (!sah) {
        const kolomKosong = [materi, catatan, rencana].find(
            (kolom) => kolom.value.trim() === ""
        );

        kolomKosong?.focus();
        return;
    }

    console.log("Form berhasil dikirim tanpa reload.");
});