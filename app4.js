// Foreach Method
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (el) {

//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

const anime = [

  {
    title: 'Attack On Titan',
    rating: '90',
  },
  {
    title: 'One Piece',
    rating: '89',
  },
  {
    title: 'Bleach',
    rating: '82',
  },
  {
    title: 'Hunter X Hunter',
    rating: '80',
  },

];

anime.forEach(function (anime) {
  console.log(`${anime.title} - ${anime.rating}/100`);
});