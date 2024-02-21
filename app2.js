// Membuat Game Tebak Tebakkan Angka Dengan While

// let maximum = parseInt(prompt('Masukkan Nilai Maksimal'));
// while (!maximum) {
//   maximum = parseInt(prompt('Masukkan Nilai Maksimal !'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Ini Tebakan pertama kamu !'));
// let attempt = 1;

// while (parseInt(guess) !== targetNum) {
//   attempt++;
//   if (guess > targetNum) {
//     guess = prompt('Terlalu tinggi! Tebak lagi :');
//   } else {
//     guess = prompt('Terlalu rendah! Tebak lagi :');
//   }
// }

// alert(`selamat tebakkan anda benar! Dengan Percobaan ${attempt} kali`);

// *************************************************

// Cara Elegan Melakukan Perulangan Pada Array For Of

// const fruits = ['Banana', 'Orange', 'Apple', 'Manggo'];

// for (let fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

// *************************************************

// Melakukan Perulangan Pada Object Dengan Elegan For In

const studentScore = {
  Olivia: 29,
  Liam: 13,
  Emma: 40,
  Noah: 18,
  Amelia: 32,
  Oliver: 10,
  Ava: 11,
  Elijah: 21,
  Shopia: 14,
  Mateo: 22,
};

// for (let student in studentScore) {
//   console.log(`${student} memiliki Score ${studentScore[student]}`);
// }

let total = 0;
let scores = Object.values(studentScore);
for (let score of scores) {
  total += score;

}

console.log(total / scores.length);