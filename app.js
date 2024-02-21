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
const pilihan = 'abcd';
for (let i = 1; i <= 10; i++) {
 console.log(`${i}. Soal nomer ${i}:`)
 for (let j = 0; j < pilihan.length; j++) {
  console.log(`${pilihan[j]}. pilihan jawaban`);
 }
}