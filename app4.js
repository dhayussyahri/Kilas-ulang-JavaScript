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

const random = () => {
  return Math.floor(Math.random()) + 1;

}