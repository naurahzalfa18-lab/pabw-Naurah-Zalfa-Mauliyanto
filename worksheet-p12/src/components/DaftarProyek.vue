
<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
import TombolFilter from './TombolFilter.vue'

const proyekTersaring = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }

  return state.daftarProyek.filter(
    proyek => proyek.kategori === state.kategoriAktif
  )
})
</script>

<template>
  <section id="bagian-proyek">
    <h2>Proyek</h2>

    <TombolFilter />

    <ul id="daftar" v-if="proyekTersaring.length > 0">
      <li v-for="proyek in proyekTersaring" :key="proyek.id">
        <h3>{{ proyek.judul }}</h3>
        <p>{{ proyek.deskripsi }}</p>
      </li>
    </ul>

    <p id="pesan-kosong" v-else>
      Tidak ada proyek pada kategori itu.
    </p>
  </section>
</template>
