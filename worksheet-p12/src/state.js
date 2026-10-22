
import { reactive } from 'vue'
import { daftarProyek } from './data.js'

export const state = reactive({
  daftarProyek: daftarProyek,
  kategoriAktif: 'semua',
  kataKunci: '',
})

export function pilihKategori(nilai) {
  if (!['semua', 'web', 'data'].includes(nilai)) {
    return
  }

  state.kategoriAktif = nilai
}
