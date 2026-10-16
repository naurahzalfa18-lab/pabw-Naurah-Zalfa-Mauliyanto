export const profil = {
    nama: "Naurah Zalfa Mauliyanto",
    peran: "Mahasiswa Informatika yang sedang mengembangkan kemampuan di bidang teknologi dan web",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => {
    return daftar.join(" · ");
};

export const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true,
        kategori: "web"
    },
    {
        judul: "Website Rencana Belajar",
        tahun: 2026,
        selesai: true,
        kategori: "web"
    },
    {
        judul: "Aplikasi Login",
        tahun: 2026,
        selesai: false,
        kategori: "web"
    }
];
