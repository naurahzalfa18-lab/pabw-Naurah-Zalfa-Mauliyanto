import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
    kategoriAktif: "semua",
    daftarProyek: daftarProyek,
    kataKunci: ""
};

export function pilihKategori(nilai) {
    state.kategoriAktif = nilai;
    render(state);
}
