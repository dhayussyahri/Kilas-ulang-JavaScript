// console.log("sebelum pembanding")
// if (1 + 1 === 2) {
//   console.log("Perhitungan masih betul")
// }
// console.log("setelah pembanding")

//iF STATEMENT
// let angka = Math.random()
// console.log(angka)

// if (angka >= 0.5) {
//   console.log("Angka Lebih besar dari 0,5")
// }

// if (angka <= 0.5) {
//   console.log("Angka lebih kecil dari 0,5")
// }

// IF ELSE STATEMENT
// const iniHari = prompt("isikan hari").toLowerCase()

// if (iniHari === "senin") {
//   console.log("Selamat Bekerja Kawan")
// } else if (iniHari === "sabtu") {
//   console.log("Semoga jangan cepat berlalu")
// } else {
//   console.log("Yah Biasa aja")
// }

// const password = prompt('buat password');

// Password harus sepanjang 6 karakter.
// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log('password valid');
//   } else {
//     console.log('Password tidak boleh ada spasi');
//   }
// } else {
//   console.log('Password minimal 6 karakter');
// }

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//   console.log('password valid');
// } else {
//   console.log('password tidak memenuhi syarat');
// }

// const role = prompt('masukkan role akun');

// Operator Logic or
// if (role === 'admin' || role === 'spv') {
//   console.log('akses diizinkan');
// } else {
//   console.log('akses ditolak');
// }

// Operator not
// if (role !== 'admin') {
//   console.log('akses ditolak');
// } else {
//   console.log('akses diizinkan');
// }

// Operator switch
const balonku = prompt('input warna balon');
switch (balonku) {
  case 'merah':
    console.log('warna merah');
    break;
  case 'hijau':
    console.log('dooor');
    break;
  default:
    console.log('bukan balon saya');
}