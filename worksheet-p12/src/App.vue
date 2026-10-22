
<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const profil = {
  nama: 'Rencana Belajar Harian Saya',
  peran: 'Halaman ini berisi kegiatan belajar yang saya lakukan setiap hari.'
}
</script>

<template>
  <KepalaProfil :profil="profil" />

  <main class="content">
    <FormKontak />

    <section id="bagian-1" class="utama">
      <h2>Jadwal Belajar</h2>

      <div class="table-wrap">
        <table>
          <caption>Jadwal Belajar Harian</caption>

          <thead>
            <tr>
              <th scope="col">Hari</th>
              <th scope="col">Materi</th>
              <th scope="col">Progress</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Senin</th>
              <td>Materi CSS</td>
              <td>80%</td>
            </tr>
            <tr>
              <th scope="row">Selasa</th>
              <td>Materi JavaScript</td>
              <td>80%</td>
            </tr>
            <tr>
              <th scope="row">Rabu</th>
              <td>Materi HTML</td>
              <td>75%</td>
            </tr>
            <tr>
              <th scope="row">Kamis</th>
              <td>Materi Python</td>
              <td>60%</td>
            </tr>
            <tr>
              <th scope="row">Jumat</th>
              <td>Materi React</td>
              <td>50%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure>
        <img
          src="/belajar.jpe?url"
          alt="A person studying hard and never giving up on their dreams"
        >

        <figcaption>
          A person studying hard and never giving up on their dreams
        </figcaption>
      </figure>
    </section>

    <DaftarProyek />
  </main>

  <footer>
    <p>Naurah Zalfa Mauliyanto · 25523075 · 2026</p>
  </footer>
</template>
