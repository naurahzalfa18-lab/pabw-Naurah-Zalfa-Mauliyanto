
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
        const isi = JSON.parse(localStorage.getItem(KUNCI));

        // Jika simpanan kosong atau versinya tidak cocok
        if (isi?.versi !== VERSI) {
            localStorage.removeItem(KUNCI);
            return null;
        }

        return isi;
    } catch {
        // Jika isi simpanan rusak atau bukan JSON yang sah
        localStorage.removeItem(KUNCI);
        return null;
    }
}

export function aturUlang() {
    localStorage.removeItem(KUNCI);
}
