// Perulangan For JavaScript !
// for (let i = 1; i <= 10; i++) {
//  console.log(i);
// }

// contoh lain dari perulangan for pengurangan hingga perkalian
// for (let i = 10; i <= 100000; i *= 10) {
//  console.log('saya ada didalam loop');
//  console.log(i);
// }

// Mendapatkan Data Dari Array Dengan Perulangan
// const animals = ['cat', 'deer', 'hog', 'koala'];

// for (let i = 0; i <= animals.length; i++) {
//  console.log(i, animals[1]);
// }

// Nasted Loop
// const pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//  console.log(`${i}. Soal nomer ${i}:`)
//  for (let j = 0; j < pilihan.length; j++) {
//   console.log(`${pilihan[j]}. pilihan jawaban`);
//  }
// }

// mendapatkan data dari Nasted Array dengan Nasted Loop
// const studentRow = [
//   ['Olivia', 'Liam', 'Emna', 'Noah'],
//   ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//   ['Sophia', 'Mateo', 'Isabella', 'Lucas']
// ];

// for (let i = 0; i <= studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat box #${i + i}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`  ${row[j]}`);
//   }
// }


// Perulangan menggunakan while
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while (guess !== PASSWORD) {
//   guess = prompt('enter the password');
// }
// alert('the password is correct');


// Kata Kunci Break Untuk Memberhentikan Perulangan
// let input = prompt('Hei, Say Something !');

// while (true) {
//   input = prompt(input);
//   if (input === 'stop') break;
// }
// alert('oke');

for (let i = 0; i < 10000; i++) {
  console.log(i);
  if (i === 100) break;
}