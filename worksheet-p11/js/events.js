
import { pilihKategori, resetKategori } from "./state.js";

export function pasangEvent() {
    // Filter kategori proyek
    const barisFilter = document.querySelector("#filter");

    barisFilter.addEventListener("click", (event) => {
        const tombol = event.target.closest("button[data-kategori]");

        if (!tombol) return;

        pilihKategori(tombol.dataset.kategori);
    });

    // Tombol atur ulang kategori
    const tombolAturUlang = document.querySelector("#atur-ulang");

    tombolAturUlang.addEventListener("click", () => {
        resetKategori();
    });

    // Form Evaluasi Belajar
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

    // Memeriksa satu kolom
    function validasiKolom(kolom, pesanError) {
        const valid = kolom.value.trim() !== "";

        kolom.setAttribute("aria-invalid", String(!valid));

        pesanError.textContent = valid
            ? ""
            : "Kolom ini wajib diisi. Silakan masukkan isinya.";

        return valid;
    }

    // Memeriksa seluruh kolom
    function validasiForm() {
        return kolomForm
            .map(([kolom, pesanError]) =>
                validasiKolom(kolom, pesanError)
            )
            .every(Boolean);
    }

    // Mengatur status tombol Simpan
    function perbaruiTombol() {
        tombolSimpan.disabled = !kolomForm.every(
            ([kolom]) => kolom.value.trim() !== ""
        );
    }

    // Tombol nonaktif saat halaman pertama dibuka
    tombolSimpan.disabled = true;

    // Memeriksa kolom setiap kali pengguna mengetik
    kolomForm.forEach(([kolom, pesanError]) => {
        kolom.addEventListener("input", () => {
            console.log("Input terdeteksi:", kolom.id, kolom.value);

            validasiKolom(kolom, pesanError);
            perbaruiTombol();
        });
    });

    // Memproses pengiriman formulir
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

        // Mengosongkan formulir setelah berhasil
        form.reset();

        kolomForm.forEach(([kolom, pesanError]) => {
            kolom.setAttribute("aria-invalid", "false");
            pesanError.textContent = "";
        });

        tombolSimpan.disabled = true;
    });
}
