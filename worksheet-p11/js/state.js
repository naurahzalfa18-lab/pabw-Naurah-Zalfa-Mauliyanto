export const state = {
    pilihanAktif: "semua",
    daftarProyek: [],
    kataKunci: ""
};

export function ubahPilihan(pilihan) {
    state.pilihanAktif = pilihan;
}

export function ubahDaftarProyek(daftar) {
    state.daftarProyek = daftar;
}

export function ubahKataKunci(kataKunci) {
    state.kataKunci = kataKunci;
}
