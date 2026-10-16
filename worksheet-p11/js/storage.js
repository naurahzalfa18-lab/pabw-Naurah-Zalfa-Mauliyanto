
const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
    const isi = {
        versi: VERSI,
        kategoriAktif: state.kategoriAktif
    };

    localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
    try {
        const teks = localStorage.getItem(KUNCI);

        if (teks === null) {
            return null;
        }

        return JSON.parse(teks);
    } catch {
        return null;
    }
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
}
