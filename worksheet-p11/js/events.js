import { state, ubahPilihan } from "./state.js";
import { renderProyek, tandaiTombolAktif } from "./dom.js";
import { daftarProyek } from "./data.js";

export function pasangEvent() {
   
    const barisFilter = document.querySelector("#filter");

    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button");

        if (!tombol) return;

        ubahPilihan(tombol.dataset.kategori);

        const terpilih = daftarProyek.filter(
            (proyek) =>
                state.pilihanAktif === "semua" ||
                proyek.kategori === state.pilihanAktif
        );

        tandaiTombolAktif(tombol);
        renderProyek(terpilih);
    });

    const form = document.querySelector("form");

    const kolomForm = [
        [
            document.querySelector("#materi"),
            document.querySelector("#error-materi")
        ],
        [
            document.querySelector("#catatan-evaluasi"),
            document.querySelector("#error-catatan")
        ],
        [
            document.querySelector("#rencana-perbaikan"),
            document.querySelector("#error-rencana")
        ]
    ];

    const tombolSimpan = form.querySelector(
        "button[type='submit']"
    );

    function validasiKolom(kolom, pesanError) {
        const valid = kolom.value.trim() !== "";

        kolom.setAttribute("aria-invalid", String(!valid));

        pesanError.textContent = valid
            ? ""
            : "Kolom ini wajib diisi. Silakan masukkan isinya.";

        return valid;
    }

    function validasiForm() {
        return kolomForm
            .map(([kolom, pesanError]) =>
                validasiKolom(kolom, pesanError)
            )
            .every(Boolean);
    }

    function perbaruiTombol() {
        tombolSimpan.disabled = !kolomForm.every(
            ([kolom]) => kolom.value.trim() !== ""
        );
    }

    tombolSimpan.disabled = true;

    kolomForm.forEach(([kolom, pesanError]) => {
        kolom.addEventListener("input", () => {
            validasiKolom(kolom, pesanError);
            perbaruiTombol();
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validasiForm()) {
            const kolomKosong = kolomForm.find(
                ([kolom]) => kolom.value.trim() === ""
            );

            kolomKosong?.[0].focus();
            perbaruiTombol();
            return;
        }

        console.log("Form berhasil dikirim tanpa reload.");

        form.reset();

        kolomForm.forEach(([kolom, pesanError]) => {
            kolom.setAttribute("aria-invalid", "false");
            pesanError.textContent = "";
        });

        tombolSimpan.disabled = true;
    });
}
