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
// let tinggi = 8;
// if (tinggi > 5) {
//   var lebar = 10;
// }

// console.log('lebar',lebar);

// for (let index = 0; index < 10; index++) {
//   var indexNumber = index;
//   // console.log(indexNumber);
// }
// console.log('index :', indexNumber);

// ***************************************************

// Lexical Scope

// function lamarKerja() {
//   const jabatan = 'programmer';

//   function lebihDalam() {
//     function orangDalam() {
//       let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//       console.log(kenalan);
//     }

//     orangDalam();

//   }
//   lebihDalam()

// }

// ***************************************************

//  Function Expressions

// function perpangkatan(nilai) {
//   return nilai * nilai;

// }

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function (nilai) {
//   return nilai * nilai;

// };

// hasilPerpangkatan(10);

// ***********************************************

// Function Sebagai Argument Function Lain
// function duaKali(func) {
//   func();
//   func();

// }

// function LemparDadu() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }

// *********************************************

// Function Bernilai Balik Function
// function hasilnyaAdalahFunction() {
//   const rend = Math.random()
//   if (rend > 0.10) {
//     return function () {
//       console.log('selamat, angkanya lebih besar!');

//     }

//   } else {
//     return function () {
//       console.log('maaf, mungkin bisa coba lagi!');

//     };
//   }
// }

// *****************************************************

// Definisi Sebuah Method
// function myFun() { //function biasa
//   console.log('Hi');
//   return 'Hello';

// };

// const myMath = { //object
//   perkalian : function (x, y) { //method
//     return x * y;
//   },

// };

// ***************************************************

// This Adalah Keyword Sakti
// const saya = {
//   nama: 'Dhayus',
//   hobi: 'Coding',
//   kenalan: function () {
//     return `Hai, saya ${this.nama}. hobi saya ${this.hobi}`;
//   },

// };

// ***********************************************************

// Try And Catch Adalah Penyelamat

// try {
//   SafeArray.kenalan()

// } catch {

//   console.log('error !!')

// }

// // saya.kenalan();
// console.log('Setelah proses Try and Catch !');

function teriak(msg) {
  try {
    console.log(msg.toUpperCase());

  } catch (error) {
    console.log(error);
    console.log('Silahkan masukkan tipe data string pada argumen');

  }

}