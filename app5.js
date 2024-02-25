// Mengatur Default Value Pada Function
function LemparDadu(sisi = 6) {
   return Math.floor(Math.random() * sisi) + 1;

}

function sapa(name = 'user', msg = 'Selamat Bekerja') {
   console.log(`${name} ${msg}`);
}

// *******************************************************

// Mengubah Array Atau Object Menjadi Deret Value Argument Function
const angka = [1, 2, 3, 4, 5];

// tambahkan "..." untuk mengubah array menjadi object
Math.min(...angka);