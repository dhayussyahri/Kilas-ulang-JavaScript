// Materi FUNCTION DAN METHOD PADA JAVASCRIPT

// Pengenalan Function Di Javascript

// let LemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(LemparDadu);

// function LemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// Panggil di console browser dengan LemparDadu()

// ********************************************************
// Mendefinisikan Dan Menjalankan Function
// function nyanyi() {
//   console.log('Cek....');
//   console.log('Do Re Mii ....');
// }

// *******************************************************

// Argument Dan Parameter Dalam Function
// function selamatPagi(name) {
//   console.log(`Hello, ${name}. Selamat Pagi`);
// }

// ********************************************************

// Multiple Parameter Dan Argument
// function jumlahankan(a, b) {
//   const total = a + b;
//   console.log(total);
// }

// *******************************************************

// Statement Return Pada Function
// function jumlahkan(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return false;
//   }
//   return a + b;
// }

// ******************************************************

// Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup
// let programming = 'javascript';

// function typesafe() {
//   let programming = 'javascript';
//   console.log(programming)
// }

// typesafe();

// ****************************************************

// Blocked Scope Variabel
let tinggi = 8;
if (tinggi > 5) {
  var lebar = 10;
}

console.log('lebar',lebar);

for (let index = 0; index < 10; index++) {
  var indexNumber = index;
  // console.log(indexNumber);
}
console.log('index :', indexNumber);

