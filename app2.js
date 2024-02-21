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

const fruits = ['Banana', 'Orange', 'Apple', 'Manggo'];

for (let fruit of fruits) {
  console.log(`Buah ${fruit}`);
}