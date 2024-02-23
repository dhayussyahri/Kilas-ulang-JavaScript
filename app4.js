// Foreach Method
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (el) {

//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const anime = [

//   {
//     title: 'Attack On Titan',
//     rating: '90',
//   },
//   {
//     title: 'One Piece',
//     rating: '89',
//   },
//   {
//     title: 'Bleach',
//     rating: '82',
//   },
//   {
//     title: 'Hunter X Hunter',
//     rating: '80',
//   },

// ];

// anime.forEach(function (anime) {
//   console.log(`${anime.title} - ${anime.rating}/100`);
// });

// ****************************************************************

// Map Method
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function (num) {
//   return num * 2;
// });

// const anime = [

//   {
//     title: 'Attack On Titan',
//     rating: '90',
//   },
//   {
//     title: 'One Piece',
//     rating: '89',
//   },
//   {
//     title: 'Bleach',
//     rating: '82',
//   },
//   {
//     title: 'Hunter X Hunter',
//     rating: '80',
//   },

// ];

// const animeList = anime.map(function (anime) {
//   return anime.title.toUpperCase();
// });

// ***************************************************************

// Sebelum Lanjut Kenalan Dengan Arrow Function

// function perpangkatan(x) {
//   return x * x;
// }

// const hasil = perpangkatan(5);

// const perpangkatan = (x) => {
//   return x * x;
// };

// const random = () => {
//   return Math.floor(Math.random()) + 1;

// }

// *************************************************************

// Return Secara Implisit Dari Arrow Function

// const random = () => (
//   Math.floor(Math.random() * 1000)
// )

// arrow function tanpa menggunakan return

// ************************************************************

// Memahami Settimeout Dan Setinterval

// console.log('Hello ...');
// setTimeout(() => {

//   console.log('Masih disana engga? ');

// }, 5000);

// console.log('Saya pergi ya !');

// const interval = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// ************************************************************

// Memiilh Data Tertentu Di Dalam Array Dengan Filter Method
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const angkaGanjil = angka.filter((n) => {
//   return n % 2 === 1;
// });

// ***************************************************************

// Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method

// const examScore = [80, 85, 70, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// const anime = [

//   {
//     title: 'Attack On Titan',
//     rating: 90,
//     year: 2005,
//   },
//   {
//     title: 'One Piece',
//     rating: 89,
//     year: 2007,
//   },
//   {
//     title: 'Bleach',
//     rating: 82,
//     year: 2010,
//   },
//   {
//     title: 'Hunter X Hunter',
//     rating: 80,
//     year: 2008,
//   },
//   {
//     title: 'Tower Of God',
//     rating: 80,
//     year: 2023,
//   },

// ];

// const isAnimeListNew = anime.some((anime) => anime.year > 2025);

// ***************************************************************

// Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce

// const examScore = [80, 85, 70, 90, 93, 77];

// let total = 0;
// for (let score of examScore) {
//   total += score;
// }

// const total = examScore.reduce((total, score) => {

//   return total + score;
// });

// const anime = [

//   {
//     title: 'One Piece',
//     rating: 89,
//     year: 2007,
//   },
//   {
//     title: 'Bleach',
//     rating: 82,
//     year: 2010,
//   },

//   {
//     title: 'Attack On Titan',
//     rating: 92,
//     year: 2005,
//   },
//   {
//     title: 'Hunter X Hunter',
//     rating: 80,
//     year: 2008,
//   },
//   {
//     title: 'Tower Of God',
//     rating: 80,
//     year: 2023,
//   },

// ];

// const bestAnime = anime.reduce((bestAnime, currAnime) => {
//   console.log(bestAnime, currAnime);
//   if (currAnime.rating > bestAnime.rating) {
//     return currAnime;
//   }
//   return bestAnime;
// });