
<script setup>
defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header id="beranda">
    <div class="header-baris">
      <h1>{{ profil.nama }}</h1>

      <p class="deskripsi-header">
        {{ profil.peran }}
      </p>

      <div class="navigasi-bawah">
        <nav class="navbar" aria-label="Navigasi utama">
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#bagian-1">Jadwal Belajar</a></li>
            <li><a href="#bagian-2">Evaluasi Belajar</a></li>
          </ul>
        </nav>

        <label class="tombol-tema">
          <input
            type="checkbox"
            id="tema"
            class="pengalih-tema"
          >
          Tema gelap
        </label>
      </div>
    </div>
  </header>
</template>
