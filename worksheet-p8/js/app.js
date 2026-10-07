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