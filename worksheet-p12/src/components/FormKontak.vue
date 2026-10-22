
<script setup>
import { reactive } from 'vue'

const form = reactive({
  materi: '',
  catatan: '',
  rencana: ''
})

const error = reactive({
  materi: '',
  catatan: '',
  rencana: ''
})

function simpanEvaluasi() {
  error.materi = form.materi.trim()
    ? ''
    : 'Materi wajib diisi.'

  error.catatan = form.catatan.trim()
    ? ''
    : 'Catatan evaluasi wajib diisi.'

  error.rencana = form.rencana.trim()
    ? ''
    : 'Rencana perbaikan wajib diisi.'

  if (error.materi || error.catatan || error.rencana) {
    return
  }

  alert(`Evaluasi tersimpan untuk materi: ${form.materi}`)

  form.materi = ''
  form.catatan = ''
  form.rencana = ''
}
</script>

<template>
  <section id="bagian-2" class="sisi">
    <h2>Evaluasi Belajar</h2>

    <form @submit.prevent="simpanEvaluasi">
      <p>
        <label for="materi">Materi yang dipelajari</label>
        <input
          type="text"
          id="materi"
          name="materi"
          v-model="form.materi"
        >
        <small id="error-materi">{{ error.materi }}</small>
      </p>

      <p>
        <label for="catatan-evaluasi">Catatan Evaluasi</label>
        <input
          type="text"
          id="catatan-evaluasi"
          name="catatan-evaluasi"
          v-model="form.catatan"
        >
        <small id="error-catatan">{{ error.catatan }}</small>
      </p>

      <p>
        <label for="rencana-perbaikan">Rencana Perbaikan</label>
        <input
          type="text"
          id="rencana-perbaikan"
          name="rencana-perbaikan"
          v-model="form.rencana"
        >
        <small id="error-rencana">{{ error.rencana }}</small>
      </p>

      <button type="submit">Simpan</button>
    </form>
  </section>
</template>
