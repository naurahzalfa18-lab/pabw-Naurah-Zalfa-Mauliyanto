
const data = {
    judul: "Belajar JSON",
    nivel: 2
};

const teks = JSON.stringify(data);
console.log(teks);
console.log(typeof teks);

const hasil = JSON.parse(teks);
console.log(hasil.judul);
console.log(typeof hasil);
