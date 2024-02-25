// Mengatur Default Value Pada Function
// function LemparDadu(sisi = 6) {
//    return Math.floor(Math.random() * sisi) + 1;

// }

// function sapa(name = 'user', msg = 'Selamat Bekerja') {
//    console.log(`${name} ${msg}`);
// }

// *******************************************************

// Mengubah Array Atau Object Menjadi Deret Value Argument Function
// const angka = [1, 2, 3, 4, 5];

// // tambahkan "..." untuk mengubah array menjadi object
// Math.min(...angka);

// *****************************************************

// Menggabungkan Nilai Array Dengan Array Lagi
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const nama = ['Dhayus', 'Hagi', 'Peta', 'Wili'];

// const campuran = [...angka, ...nama];

// *****************************************************
// Menggabungkan Property Object Dengan Object Lainnya

// const user = {
//    nama: 'Dhayus',
//    email: 'dhayus190997@gmail.com',
// };

// const userBaru = { ...user, id: 12344, passwoord: 'password' };

// *****************************************************
// Malas Bikin Parameter Banyak Bisa Pakai Rest Param

// const sunAll = (...nums) => {
//    return nums.reduce((total, el) => total + el);
// };

// const nama = ['Alex', 'Dhayus', 'William', 'Peta', 'Hagi'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//    console.log(`Medali emas diraih ${gold}`);
//    console.log(`Medali Silver diraih ${silver}`);
//    console.log(`Medali Bronze diraih ${bronze}`);
//    console.log(`Peserta lainnya ${sisa}`)
// };

// ******************************************************

// Bongkar Juga Properti Object Ke Masing-Masing Variabel

const nama = ['Alex', 'Dhayus', 'William', 'Peta', 'Hagi'];

const [gold, silver, bronze, ...peserta] = nama;