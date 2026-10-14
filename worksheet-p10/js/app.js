
import { ambilNotisia } from './api.js';

async function ujiApi() {
  try {
    const data = await ambilNotisia();

    console.log('Data lengkap:', data);
    console.log('Data pertama:', data[0]);
    console.log('Judul:', data[0].title);
    console.log('Isi:', data[0].body);
    console.log('Jenis data:', typeof data);
    console.log('Jumlah data:', data.length);

    console.log('Data berhasil dimuat:', data);
  } catch (galat) {
    console.error(
      'Pemanggil menangkap galat:',
      galat.message
    );
  }
}

ujiApi();

const wadah = document.querySelector('#daftar-api');

async function tampilkanData() {
  wadah.textContent = 'Memuat data...';

  try {
    const data = await ambilNotisia();

    if (data.length === 0) {
      wadah.textContent = 'Belum ada data.';
      return;
    }

    wadah.textContent = '';

    data.slice(0, 5).forEach(function (post) {
      const kartu = document.createElement('article');

      const judul = document.createElement('h3');
      judul.textContent = post.title;

      const isi = document.createElement('p');
      isi.textContent = post.body;

      kartu.appendChild(judul);
      kartu.appendChild(isi);
      wadah.appendChild(kartu);
    });

  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tampilkanData();

