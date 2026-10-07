const nama = "Naurah Zalfa Mauliyanto";

const profil = {
    nama: "Naurah Zalfa Mauliyanto",
    peran: "Mahasiswa Informatika yang sedang mengembangkan kemampuan di bidang teknologi dan web",
    keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahProyek = 5;

let pilihanAktif = "semua";

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);

const namaPanggilan = profil.namaPanggilan ?? profil.nama;

console.log(`Nama panggilan: ${namaPanggilan}`);

console.log(`Keahlian pertama: ${profil.keahlian?.[0]}`);

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => {
    return daftar.join(" · ");
};

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Website Rencana Belajar",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Aplikasi Login",
        tahun: 2026,
        selesai: false
    }
];

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.table(judulProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(proyekSelesai);

const proyekLogin = daftarProyek.find(
    (proyek) => proyek.judul === "Aplikasi Login"
);

console.log(proyekLogin);

const proyekUrut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);

console.table(proyekUrut);
console.table(daftarProyek);
