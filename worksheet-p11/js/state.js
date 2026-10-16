
import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { simpan, muat, aturUlang } from "./storage.js";

const dataTersimpan = muat();

const kategoriAwal =
    dataTersimpan !== null &&
    dataTersimpan.versi === 2 &&
    ["semua", "web", "data"].includes(dataTersimpan.kategoriAktif)
        ? dataTersimpan.kategoriAktif
        : "semua";

export const state = {
    kategoriAktif: kategoriAwal,
    daftarProyek: daftarProyek,
    kataKunci: ""
};

export function pilihKategori(nilai) {
    if (!["semua", "web", "data"].includes(nilai)) {
        return;
    }

    state.kategoriAktif = nilai;
    simpan(state);
    render(state);
}

export function resetKategori() {
    aturUlang();
    state.kategoriAktif = "semua";
    render(state);
}
